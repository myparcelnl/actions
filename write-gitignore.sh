#!/usr/bin/env bash

# Add production dependencies and all their dependencies to .gitignore. These dependencies need to be checked in for js
# actions to work.

deps=$(npm pkg get dependencies --json)

allDependencies="[]"
fetchedDepsFor="[]"

function get-deps-recursive() {
  package=$1
  echo "Fetching deps for $package"
  fetchedDepsFor+=($package)

  dependencies=$(yarn npm info $package --json | jq '.dependencies')

  # if package is scoped, add the namespace to the list of dependencies
  packageNamespace=$(echo $package | cut -d'/' -f1)
  allDependencies=$(echo $allDependencies | jq ". + [\"$packageNamespace\"]")
  allDependencies=$(echo $allDependencies | jq ". + [\"$package\"]")

  if [ "$dependencies" == "null" ]; then
    return
  fi

  dependencyKeys=$(echo $dependencies | jq -r 'keys[]')

  for dep in $dependencyKeys; do
    allDependencies=$(echo $allDependencies | jq ". + [\"$dep\"]")
  done

  for dep in $dependencyKeys; do
    if [[ " ${fetchedDepsFor[@]} " =~ " ${dep} " ]]; then
      echo "Skipping $dep as it has already been fetched."
      continue
    fi

    get-deps-recursive $dep
  done
}

for dep in $(echo $deps | jq -r 'keys[]'); do
  get-deps-recursive $dep
done

# remove duplicates
allDependencies=$(echo $allDependencies | jq 'unique | sort')

startMarker="# <!-- start automatically generated entries -->"
endMarker="# <!-- end automatically generated entries -->"

# delete the old markers and content
sed -i .bak "/$startMarker/,/$endMarker/d" ".gitignore"
rm -f ".gitignore.bak"

# add the new content
echo "$startMarker" >> ".gitignore"
echo "node_modules/*" >> ".gitignore"

for dep in $(echo $allDependencies | jq -r '.[]'); do
  echo "!node_modules/$dep/" >> ".gitignore"
done

echo "$endMarker" >> ".gitignore"

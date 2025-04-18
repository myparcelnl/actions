# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.44.6](https://github.com/myparcelnl/actions/compare/v4.44.5...v4.44.6) (2025-04-09)


### :bug: Bug Fixes

* **pnpm-install:** fix clearing credentials when using actions/pnpm-install ([#74](https://github.com/myparcelnl/actions/issues/74)) ([198236c](https://github.com/myparcelnl/actions/commit/198236c0f4f908d6130eaa874aaffa30c99fe14b))

## [4.44.5](https://github.com/myparcelnl/actions/compare/v4.44.4...v4.44.5) (2025-03-05)


### :bug: Bug Fixes

* **pdk-prerelease:** fix composer not allowing dash before stability ([476fd7b](https://github.com/myparcelnl/actions/commit/476fd7b8a918684bcc9d8f1941d47b2288a645bf))

## [4.44.4](https://github.com/myparcelnl/actions/compare/v4.44.3...v4.44.4) (2025-03-05)


### :bug: Bug Fixes

* **pdk-prerelease:** generated version string was not a valid composer.json version ([578ad19](https://github.com/myparcelnl/actions/commit/578ad191cf26686fd72b77b5b5d30626b0829d25))

## [4.44.3](https://github.com/myparcelnl/actions/compare/v4.44.2...v4.44.3) (2025-03-03)


### :bug: Bug Fixes

* prerelease generated version strings that could not be compared ([#72](https://github.com/myparcelnl/actions/issues/72)) ([17371e2](https://github.com/myparcelnl/actions/commit/17371e2dae778cf493f00bb7b598f5d4ff979d92))

## [4.44.2](https://github.com/myparcelnl/actions/compare/v4.44.1...v4.44.2) (2025-02-24)


### :bug: Bug Fixes

* **semantic-release:** fix working-directory input not working for semantic-release ([7e595b2](https://github.com/myparcelnl/actions/commit/7e595b2b9d569bf4aab6b1bfe89498bd124b9ad0))

## [4.44.1](https://github.com/myparcelnl/actions/compare/v4.44.0...v4.44.1) (2025-02-14)


### :bug: Bug Fixes

* duplicate ids for setup actions ([7dab01c](https://github.com/myparcelnl/actions/commit/7dab01cbdcfb11409dcc0875cf0772d648748c04))

## [4.44.0](https://github.com/myparcelnl/actions/compare/v4.43.26...v4.44.0) (2025-02-14)


### :sparkles: New Features

* **pdk:** allow running the pdk-prerelease script without updating the pdk dependencies ([#70](https://github.com/myparcelnl/actions/issues/70)) ([67905f8](https://github.com/myparcelnl/actions/commit/67905f88512ec146edbf0d1b1cc647338ec67d94))

## [4.43.26](https://github.com/myparcelnl/actions/compare/v4.43.25...v4.43.26) (2025-01-03)


### :bug: Bug Fixes

* dev deps installed on pdk-setup-upgrade ([#69](https://github.com/myparcelnl/actions/issues/69)) ([3b31dd1](https://github.com/myparcelnl/actions/commit/3b31dd1d5df93f585445988b7a4683377d47f611))

## [4.43.25](https://github.com/myparcelnl/actions/compare/v4.43.24...v4.43.25) (2024-11-27)


### :bug: Bug Fixes

* **pdk:** fix `pdk-setup` being skipped if `update-deps` argument was not passed ([#67](https://github.com/myparcelnl/actions/issues/67)) ([afed77d](https://github.com/myparcelnl/actions/commit/afed77df0d75b255273d3ba97690287270aabfd7))

## [4.43.24](https://github.com/myparcelnl/actions/compare/v4.43.23...v4.43.24) (2024-11-22)


### :bug: Bug Fixes

* **pr-post-artifacts:** get correct artifact url in the case of reruns ([a6c2edd](https://github.com/myparcelnl/actions/commit/a6c2eddc99ec6db43f26cd056aae1c2ab9ae8ea7))

## [4.43.23](https://github.com/myparcelnl/actions/compare/v4.43.22...v4.43.23) (2024-11-21)


### :bug: Bug Fixes

* **pdk:** run steps if cache is not hit ([972c36f](https://github.com/myparcelnl/actions/commit/972c36ffb577c683d6af2c29fa47178f53adf0ec))
* **pull-docker-image:** don't save cache if cache was hit ([c8bce56](https://github.com/myparcelnl/actions/commit/c8bce569aca707886c47af12a1a695ec2d45a541))

## [4.43.22](https://github.com/myparcelnl/actions/compare/v4.43.21...v4.43.22) (2024-11-21)


### :bug: Bug Fixes

* **pull-docker-image:** create cache dir if it doesn't exist ([11814ab](https://github.com/myparcelnl/actions/commit/11814ab52736e84f5e657b4f563f1c148df698fa))

## [4.43.21](https://github.com/myparcelnl/actions/compare/v4.43.20...v4.43.21) (2024-11-21)


### :bug: Bug Fixes

* **pdk:** don't empty the report file if cache was hit ([8fecde4](https://github.com/myparcelnl/actions/commit/8fecde4b6713d7ddefee5e229a23605b297097b2))
* **pdk:** update upgrade report logic ([25f5e01](https://github.com/myparcelnl/actions/commit/25f5e01fd07b86000494718427e8aaedc2bd324c))

## [4.43.20](https://github.com/myparcelnl/actions/compare/v4.43.19...v4.43.20) (2024-11-21)


### :bug: Bug Fixes

* **pdk:** update pdk upgrade logic ([e87d969](https://github.com/myparcelnl/actions/commit/e87d9697561a593ead45ce43fd413aa03113b14c))

## [4.43.19](https://github.com/myparcelnl/actions/compare/v4.43.18...v4.43.19) (2024-11-21)


### :bug: Bug Fixes

* **pull-docker-image:** save new image to cache if loading from cache fails ([a162b57](https://github.com/myparcelnl/actions/commit/a162b57faeb344af04de213373d90b93d6d9e08d))

## [4.43.18](https://github.com/myparcelnl/actions/compare/v4.43.17...v4.43.18) (2024-11-21)


### :bug: Bug Fixes

* **pdk:** include package manager files in upgrade cache keys ([79a57a5](https://github.com/myparcelnl/actions/commit/79a57a54d61779c2c9effc4321b5f3ec974c3214))

## [4.43.17](https://github.com/myparcelnl/actions/compare/v4.43.16...v4.43.17) (2024-11-21)


### :bug: Bug Fixes

* **pdk:** only source env file if passed ([d3699c6](https://github.com/myparcelnl/actions/commit/d3699c6bd8a6f6311a34b350004c84dc336cf43e))

## [4.43.16](https://github.com/myparcelnl/actions/compare/v4.43.15...v4.43.16) (2024-11-21)


### :bug: Bug Fixes

* **composer:** remove space in command name ([04bd174](https://github.com/myparcelnl/actions/commit/04bd1748876da65ae565bb19fba0647dfc7ea59b))

## [4.43.15](https://github.com/myparcelnl/actions/compare/v4.43.14...v4.43.15) (2024-11-21)


### :bug: Bug Fixes

* **composer:** improve env file logic ([6246da7](https://github.com/myparcelnl/actions/commit/6246da7fc360b41511b1d0e9e8fe5cad940753cc))
* **pdk:** allow passing env file that was created earlier ([5383365](https://github.com/myparcelnl/actions/commit/53833659a0b6beaf427cb97cca6a36e38eb83e96))

## [4.43.14](https://github.com/myparcelnl/actions/compare/v4.43.13...v4.43.14) (2024-11-21)


### :bug: Bug Fixes

* **pull-docker-image:** improve image caching and loading logic ([7deddb6](https://github.com/myparcelnl/actions/commit/7deddb6294b1661829f1f594ce3c71e728c8ae5e))

## [4.43.13](https://github.com/myparcelnl/actions/compare/v4.43.12...v4.43.13) (2024-11-21)


### :bug: Bug Fixes

* **pdk:** reuse composer variables to fix wrong pdk version being installed ([4fa756e](https://github.com/myparcelnl/actions/commit/4fa756e5493cc62f1e7cbf107267d914b6e2d0ab))

## [4.43.12](https://github.com/myparcelnl/actions/compare/v4.43.11...v4.43.12) (2024-11-21)


### :bug: Bug Fixes

* **composer-install:** remove invalid command argument ([05a4279](https://github.com/myparcelnl/actions/commit/05a42795532f6392feecf38e0af9255667823ade))

## [4.43.11](https://github.com/myparcelnl/actions/compare/v4.43.10...v4.43.11) (2024-11-21)


### :bug: Bug Fixes

* **pull-docker-image:** handle failure in docker save ([4123f02](https://github.com/myparcelnl/actions/commit/4123f02719655826b9056618eec23c6c64480f46))

## [4.43.10](https://github.com/myparcelnl/actions/compare/v4.43.9...v4.43.10) (2024-11-21)


### :bug: Bug Fixes

* **pull-docker-image:** improve cache logic ([a20cf28](https://github.com/myparcelnl/actions/commit/a20cf28668de9f72834ceffae2f7f836aabed2e0))

## [4.43.9](https://github.com/myparcelnl/actions/compare/v4.43.8...v4.43.9) (2024-11-21)


### :bug: Bug Fixes

* **composer-install:** stop caching vendor folder ([91c13b7](https://github.com/myparcelnl/actions/commit/91c13b7546e2b04fc8006f690bd2e1f0db826887))
* **composer-install:** switch to simpler image tag ([8c57d6a](https://github.com/myparcelnl/actions/commit/8c57d6ade23c1a312f8476f2cb2998e183f1b764))
* **composer:** improve cache folder and environment handling ([b84deeb](https://github.com/myparcelnl/actions/commit/b84deeb24a2924536aa16137d2bd2649968d526f))
* **pull-docker-image:** improve cache logic ([99aa9ee](https://github.com/myparcelnl/actions/commit/99aa9ee062a5c73c5639298acf6bd63de3e11820))

## [4.43.8](https://github.com/myparcelnl/actions/compare/v4.43.7...v4.43.8) (2024-11-21)


### :zap: Performance Improvements

* **pdk-builder:** skip steps that are not necessary when no image is passed ([e278dd5](https://github.com/myparcelnl/actions/commit/e278dd58175eeff557948da8ebb5aaa73cd22304))
* **pdk:** don't pass image when not needed ([742cf90](https://github.com/myparcelnl/actions/commit/742cf9007b7d8259775e5d5411d29bc17aa641d0))


### :bug: Bug Fixes

* **pdk:** force colored output ([7a0a969](https://github.com/myparcelnl/actions/commit/7a0a9695e0b24f5c46c776ae35199e57ea90d549))

## [4.43.7](https://github.com/myparcelnl/actions/compare/v4.43.6...v4.43.7) (2024-11-21)


### :bug: Bug Fixes

* **pdk:** increase app builder verbosity in debug mode ([4ace901](https://github.com/myparcelnl/actions/commit/4ace9018a5db557787b7732c65697dafe6a8b895))

## [4.43.6](https://github.com/myparcelnl/actions/compare/v4.43.5...v4.43.6) (2024-11-20)


### :bug: Bug Fixes

* **pdk:** merge pdk-upgrade into pdk-setup-upgrade ([621937f](https://github.com/myparcelnl/actions/commit/621937f1c5e36e0bbb7e8f8187814c61a315b204))

## [4.43.5](https://github.com/myparcelnl/actions/compare/v4.43.4...v4.43.5) (2024-11-20)


### :bug: Bug Fixes

* **pdk:** remove old version check logic ([61d0c10](https://github.com/myparcelnl/actions/commit/61d0c1043d1a77746cfb0caa629d884692f8eec7))

## [4.43.4](https://github.com/myparcelnl/actions/compare/v4.43.3...v4.43.4) (2024-11-20)


### :bug: Bug Fixes

* **pdk:** update upgrade logic ([4736d38](https://github.com/myparcelnl/actions/commit/4736d3849dacb7ded2bfae55d498714b40cc545c))

## [4.43.3](https://github.com/myparcelnl/actions/compare/v4.43.2...v4.43.3) (2024-11-07)


### :bug: Bug Fixes

* **pdk:** do not output update report if cache was hit ([a1d17a5](https://github.com/myparcelnl/actions/commit/a1d17a547f589d1d7d4888da05e9364d6ff7c3f3))
* **pdk:** remove node_modules and vendor from upgrade cache ([ef1c7b0](https://github.com/myparcelnl/actions/commit/ef1c7b0ecc78b62e4d16c4c032cdb8bd4ec9ce97))

## [4.43.2](https://github.com/myparcelnl/actions/compare/v4.43.1...v4.43.2) (2024-11-01)


### :bug: Bug Fixes

* disable some overly spammy cache debug output ([fab8074](https://github.com/myparcelnl/actions/commit/fab8074676e7e3b2f0c8fc04e26ade108c8e88b6))

## [4.43.1](https://github.com/myparcelnl/actions/compare/v4.43.0...v4.43.1) (2024-11-01)


### :bug: Bug Fixes

* **pdk:** add missing github token env variable ([e39d127](https://github.com/myparcelnl/actions/commit/e39d12769a55b0540127ec1fe3243a5348f58a09))

## [4.43.0](https://github.com/myparcelnl/actions/compare/v4.42.0...v4.43.0) (2024-11-01)


### :sparkles: New Features

* **pdk:** save upgrade state using gh variables ([c8df263](https://github.com/myparcelnl/actions/commit/c8df2633e89a3406f9e2f10c922e3676f3f711a1))

## [4.42.0](https://github.com/myparcelnl/actions/compare/v4.41.6...v4.42.0) (2024-11-01)


### :sparkles: New Features

* **pdk:** allow changing no-commit and no-check arguments ([c247002](https://github.com/myparcelnl/actions/commit/c2470020c291df48317ae0b159fc2a233df9603a))
* **semantic-release:** write summary by default ([ddd2931](https://github.com/myparcelnl/actions/commit/ddd29316cebccc6d9d7115e71e2343a25c2fc0b9))

## [4.41.6](https://github.com/myparcelnl/actions/compare/v4.41.5...v4.41.6) (2024-10-31)


### :bug: Bug Fixes

* **pdk:** output args for pdk builder to multiple lines ([37f8b09](https://github.com/myparcelnl/actions/commit/37f8b092cea1f5c307a7e26861ea7befe1753645))

## [4.41.5](https://github.com/myparcelnl/actions/compare/v4.41.4...v4.41.5) (2024-10-30)


### :bug: Bug Fixes

* **pdk:** fix ignoring platform reqs in composer ([83e1d76](https://github.com/myparcelnl/actions/commit/83e1d76b50f195b5255433eb43e2a5bdc3b36a2d))

## [4.41.4](https://github.com/myparcelnl/actions/compare/v4.41.3...v4.41.4) (2024-10-30)


### :bug: Bug Fixes

* **pdk:** fix passing args to pdk builder ([6fb2972](https://github.com/myparcelnl/actions/commit/6fb2972c0f936b862eec2831a1b680ccc03eb3a2))

## [4.41.3](https://github.com/myparcelnl/actions/compare/v4.41.2...v4.41.3) (2024-10-30)


### :bug: Bug Fixes

* **pdk:** fix artifacts not being saved when branch contains slashes ([#66](https://github.com/myparcelnl/actions/issues/66)) ([8f447ab](https://github.com/myparcelnl/actions/commit/8f447abfb7a662254dbb307873d8b4cc85f222ef))

## [4.41.2](https://github.com/myparcelnl/actions/compare/v4.41.1...v4.41.2) (2024-10-25)


### :bug: Bug Fixes

* **pdk:** support non-prerelease versions in custom build ([f85e2e0](https://github.com/myparcelnl/actions/commit/f85e2e044a7bc3867f249c2bff036dd199baded5))

## [4.41.1](https://github.com/myparcelnl/actions/compare/v4.41.0...v4.41.1) (2024-10-24)


### :bug: Bug Fixes

* **build-docker-image:** fix syntax error ([a0a1431](https://github.com/myparcelnl/actions/commit/a0a143169fb7d2c21f8e0efb552831b1f8b7c5aa))

## [4.41.0](https://github.com/myparcelnl/actions/compare/v4.40.7...v4.41.0) (2024-10-24)


### :sparkles: New Features

* **build-docker-image:** deprecate build-docker-image-reg ([b8e474e](https://github.com/myparcelnl/actions/commit/b8e474e2f8f0395e52ac026d7a5ce86f1471cf83))


### :bug: Bug Fixes

* **build-docker-image:** output first tag if multiple tags were created ([a0980fb](https://github.com/myparcelnl/actions/commit/a0980fb969a8a38d8b6cc11ada52066959836a85))

## [4.40.7](https://github.com/myparcelnl/actions/compare/v4.40.6...v4.40.7) (2024-10-23)


### :bug: Bug Fixes

* **pdk:** fix branch name missing in new version ([#65](https://github.com/myparcelnl/actions/issues/65)) ([09c0b20](https://github.com/myparcelnl/actions/commit/09c0b20a49447f436c1ef443049d0b9615a91fb9))

## [4.40.6](https://github.com/myparcelnl/actions/compare/v4.40.5...v4.40.6) (2024-10-23)


### :bug: Bug Fixes

* **format-string:** handle quoted args better ([e2d84f6](https://github.com/myparcelnl/actions/commit/e2d84f663faddb9ad07b780a055def96272fd25d))
* **pdk:** pass version without literal quotes ([9122d8d](https://github.com/myparcelnl/actions/commit/9122d8df6509c1c8b3e9bd13efe2415c1de5d255))

## [4.40.5](https://github.com/myparcelnl/actions/compare/v4.40.4...v4.40.5) (2024-10-23)


### :bug: Bug Fixes

* **pdk:** add debug output to version logic ([5902344](https://github.com/myparcelnl/actions/commit/59023449fd543758505a23497e21c2ed943e0a9d))
* **pdk:** slightly reduce verbosity of pdk builder ([5c479a0](https://github.com/myparcelnl/actions/commit/5c479a00f142672eeba93b3769dea180dd19193a))

## [4.40.4](https://github.com/myparcelnl/actions/compare/v4.40.3...v4.40.4) (2024-10-17)


### :bug: Bug Fixes

* **pdk:** improve version generation in prerelease ([5a3b648](https://github.com/myparcelnl/actions/commit/5a3b648085931e39a0721cb867c8d04068e0de7f))

## [4.40.3](https://github.com/myparcelnl/actions/compare/v4.40.2...v4.40.3) (2024-10-17)


### :bug: Bug Fixes

* **pdk:** use rc for prerelease versions ([8749dcd](https://github.com/myparcelnl/actions/commit/8749dcdea67a62b2bd37edaa662c2acd35dc749b))

## [4.40.2](https://github.com/myparcelnl/actions/compare/v4.40.1...v4.40.2) (2024-10-17)


### :bug: Bug Fixes

* **pdk:** add missing env variable ([64a672a](https://github.com/myparcelnl/actions/commit/64a672ad1e66a7a72ddea1901228e94b4bfe63c8))

## [4.40.1](https://github.com/myparcelnl/actions/compare/v4.40.0...v4.40.1) (2024-10-17)


### :bug: Bug Fixes

* **pdk:** fix root command being chopped up ([1ce72e7](https://github.com/myparcelnl/actions/commit/1ce72e73a30529948e75c6082e9b53b119611ed1))

## [4.40.0](https://github.com/myparcelnl/actions/compare/v4.39.5...v4.40.0) (2024-10-17)


### :sparkles: New Features

* **pdk:** add caching to upgrade ([edc6c06](https://github.com/myparcelnl/actions/commit/edc6c06f4c7e03d93cca90e3ad3bf383cf11d4a4))

## [4.39.5](https://github.com/myparcelnl/actions/compare/v4.39.4...v4.39.5) (2024-10-17)


### :bug: Bug Fixes

* **pdk:** fix image reference ([52462c2](https://github.com/myparcelnl/actions/commit/52462c2bbeda68f8d9b3a66ec63fa6f184daa962))

## [4.39.4](https://github.com/myparcelnl/actions/compare/v4.39.3...v4.39.4) (2024-10-17)


### :bug: Bug Fixes

* **pdk:** change version argument to use metadata for composer ([f54987e](https://github.com/myparcelnl/actions/commit/f54987e4d85fe2a144cf7dd617f31225a4080850))

## [4.39.3](https://github.com/myparcelnl/actions/compare/v4.39.2...v4.39.3) (2024-10-16)


### :bug: Bug Fixes

* **composer:** move default args ([ff3eb6a](https://github.com/myparcelnl/actions/commit/ff3eb6a75681e92c3f1a9463d3860afac863bdba))
* **pdk:** clean up composer arguments ([ed67bcd](https://github.com/myparcelnl/actions/commit/ed67bcd268bf399e813422f0fe0a2bc1ce9eddcc))

## [4.39.2](https://github.com/myparcelnl/actions/compare/v4.39.1...v4.39.2) (2024-10-16)


### :bug: Bug Fixes

* **composer-pest:** remove ambiguous default argument ([f5a5d20](https://github.com/myparcelnl/actions/commit/f5a5d203b0556b4740cb1851a42356151e316bb9))

## [4.39.1](https://github.com/myparcelnl/actions/compare/v4.39.0...v4.39.1) (2024-10-16)


### :bug: Bug Fixes

* **pdk:** allow repository_dispatch in pdk prerelease action ([b54f70d](https://github.com/myparcelnl/actions/commit/b54f70d9a675d0b9cb9e2af7968c7ef3915ab99f))

## [4.39.0](https://github.com/myparcelnl/actions/compare/v4.38.3...v4.39.0) (2024-10-11)


### :sparkles: New Features

* **composer-behat:** add php-args and behat-args ([277ea64](https://github.com/myparcelnl/actions/commit/277ea641f4ba4cbc017c46fd330623797127ff5b))
* **composer-pest:** add php-args input ([f1f2594](https://github.com/myparcelnl/actions/commit/f1f259499a55f33de3fdda152c740a6956e1b3ae))
* **composer-phpstan:** add php-args and phpstan-args ([7825bff](https://github.com/myparcelnl/actions/commit/7825bffffe18f3aca820176fa4ac835f986cb5f2))


### :bug: Bug Fixes

* **composer:** rename flags arg to composer-args for install and update ([a2fc137](https://github.com/myparcelnl/actions/commit/a2fc13793469ae2064f04c92739c988efbcded7e))
* **deprecated:** output message as warning ([c5920fd](https://github.com/myparcelnl/actions/commit/c5920fd2585562e259df461c05e90a65754f65fb))

## [4.38.3](https://github.com/myparcelnl/actions/compare/v4.38.2...v4.38.3) (2024-10-10)


### :bug: Bug Fixes

* **format-string:** handle separators with escape sequences properly ([56484ad](https://github.com/myparcelnl/actions/commit/56484ad0f22fa83b606183ae7d3867cebb601525))

## [4.38.2](https://github.com/myparcelnl/actions/compare/v4.38.1...v4.38.2) (2024-10-10)


### :bug: Bug Fixes

* **format-string:** treat 'false' input as boolean ([10b5cbc](https://github.com/myparcelnl/actions/commit/10b5cbcc596da759f09aa32d1715d13b78ef4c5e))

## [4.38.1](https://github.com/myparcelnl/actions/compare/v4.38.0...v4.38.1) (2024-10-10)


### :bug: Bug Fixes

* **pdk:** setup git credentials instead of only app credentials ([37463ce](https://github.com/myparcelnl/actions/commit/37463ce1ac1186f1fad4871a8cb7ec2e694f248b))

## [4.38.0](https://github.com/myparcelnl/actions/compare/v4.37.1...v4.38.0) (2024-10-10)


### :sparkles: New Features

* **collect-test-results:** add debug output ([cf10e48](https://github.com/myparcelnl/actions/commit/cf10e486f5c676496772225ac90fffd598115752))


### :bug: Bug Fixes

* **format-string:** use js instead of bash ([0bab5d9](https://github.com/myparcelnl/actions/commit/0bab5d9cdd00382285d4d7b6c7430bc8a726ceb7))

## [4.37.1](https://github.com/myparcelnl/actions/compare/v4.37.0...v4.37.1) (2024-10-10)


### :bug: Bug Fixes

* **nx:** disable heartbeat process ([988166b](https://github.com/myparcelnl/actions/commit/988166b62ea93341e565cf7edfc26ff1b6f4aab5))

## [4.37.0](https://github.com/myparcelnl/actions/compare/v4.36.6...v4.37.0) (2024-10-10)


### :sparkles: New Features

* add collect-test-results ([8303d32](https://github.com/myparcelnl/actions/commit/8303d327ab058ecd723c04d9e380f5b3af70a6a2))
* add format-string ([10e6b8f](https://github.com/myparcelnl/actions/commit/10e6b8fa7a480751d047d41f332fca73dc84c611))
* **build-docker-image:** improve args handling ([3d068a0](https://github.com/myparcelnl/actions/commit/3d068a0f00c4a52d95413c33fcfae11bef7ee4b4))
* **bun-install:** improve args handling ([532cc96](https://github.com/myparcelnl/actions/commit/532cc96dcfc743692ccf20285514add2f5a818fd))
* **composer-behat:** improve args handling ([1e1a606](https://github.com/myparcelnl/actions/commit/1e1a6064af4c37e444af6dc4a9cc4809f9c31dad))
* **composer-pest:** improve arguments handling ([7e39356](https://github.com/myparcelnl/actions/commit/7e39356dd7f200c78090c68af30041511df64aa8))
* **hash-string:** support improved command argument handling ([a52efdb](https://github.com/myparcelnl/actions/commit/a52efdbe6dd3b4a985d2444702db0ad3570536e6))
* **pdk-builder:** improve args handling ([6e28b47](https://github.com/myparcelnl/actions/commit/6e28b4709cd43975fe009b15e76a2b0163f19d77))
* **pnpm-install:** improve args handling ([d129328](https://github.com/myparcelnl/actions/commit/d129328492b0ba171b9b8b32e032ba3fc24ed76e))
* **semantic-release:** improve args handling ([fa03db2](https://github.com/myparcelnl/actions/commit/fa03db24d2e8316de624c20029a951e14712ed36))
* **yarn-install:** improve args handling ([749b543](https://github.com/myparcelnl/actions/commit/749b543255a039e1fa40dd66bf4e7a73f902b966))


### :bug: Bug Fixes

* **codecov-test-results:** add missing files input ([cb77d27](https://github.com/myparcelnl/actions/commit/cb77d277af5e87d555cf5a68a88f3c42e7e07c0b))
* handle empty string inputs properly ([d8acde1](https://github.com/myparcelnl/actions/commit/d8acde1509bf9eb270ec323c5667f8c5825e29b3))

## [4.36.6](https://github.com/myparcelnl/actions/compare/v4.36.5...v4.36.6) (2024-10-10)


### :bug: Bug Fixes

* **codecov:** use correct output separator ([c87be94](https://github.com/myparcelnl/actions/commit/c87be94ec8900f6ae87119dfe07f7b29d18cc6f8))
* **pdk:** generate proper version name in workflow_dispatch mode ([9dbfe17](https://github.com/myparcelnl/actions/commit/9dbfe17e8525a0b00b43dbbd1dd47cfe15119096))

## [4.36.5](https://github.com/myparcelnl/actions/compare/v4.36.4...v4.36.5) (2024-10-10)


### :bug: Bug Fixes

* **pdk:** allow workflow_dispatch as trigger in practice ([08de566](https://github.com/myparcelnl/actions/commit/08de566bd0aa2d19d30d0ea72a17915fc865e026))

## [4.36.4](https://github.com/myparcelnl/actions/compare/v4.36.3...v4.36.4) (2024-10-10)


### :bug: Bug Fixes

* **pdk:** allow workflow_dispatch as trigger ([2d37623](https://github.com/myparcelnl/actions/commit/2d3762363132fa54f41c03cf658714397bb23d5f))

## [4.36.3](https://github.com/myparcelnl/actions/compare/v4.36.2...v4.36.3) (2024-10-09)


### :bug: Bug Fixes

* **codecov:** fix glob inputs not working ([7878193](https://github.com/myparcelnl/actions/commit/7878193302bcabd2dd677d61b758c1f35e475d43))

## [4.36.2](https://github.com/myparcelnl/actions/compare/v4.36.1...v4.36.2) (2024-10-09)


### :bug: Bug Fixes

* **codecov:** streamline inputs ([a444621](https://github.com/myparcelnl/actions/commit/a444621b095623767befecbf2e524fca8b78160e))

## [4.36.1](https://github.com/myparcelnl/actions/compare/v4.36.0...v4.36.1) (2024-10-09)


### :bug: Bug Fixes

* **nx-run-many:** fix error when running ([0f49346](https://github.com/myparcelnl/actions/commit/0f4934627c4e5b0da222fe8ce88d2d2984d7b0bc))

## [4.36.0](https://github.com/myparcelnl/actions/compare/v4.35.0...v4.36.0) (2024-10-09)


### :sparkles: New Features

* **codecov:** add test results action ([a9427c6](https://github.com/myparcelnl/actions/commit/a9427c69de91ba0e15ce5bab957dc8463757e557))

## [4.35.0](https://github.com/myparcelnl/actions/compare/v4.34.1...v4.35.0) (2024-10-09)


### :bug: Bug Fixes

* **nx-cache:** remove deprecated save-always input ([d5862b9](https://github.com/myparcelnl/actions/commit/d5862b95a4825ea189c2955f2d462d6689b32a78))


### :sparkles: New Features

* **nx:** improve inputs and support cloud runs properly ([ef2a259](https://github.com/myparcelnl/actions/commit/ef2a2599f74e1314a0c754c4a76062d996fb5f25))

## [4.34.1](https://github.com/myparcelnl/actions/compare/v4.34.0...v4.34.1) (2024-10-04)


### :bug: Bug Fixes

* **pdk-setup-upgrade:** install yarn deps in backend mode ([ee64fc7](https://github.com/myparcelnl/actions/commit/ee64fc70ba386c30863a5816170b5f857f11882b))

## [4.34.0](https://github.com/myparcelnl/actions/compare/v4.33.0...v4.34.0) (2024-10-04)


### :sparkles: New Features

* **pdk:** simplify pdk prerelease actions ([f4b802a](https://github.com/myparcelnl/actions/commit/f4b802a528fb917b43253e006c2f748484205667))

## [4.33.0](https://github.com/myparcelnl/actions/compare/v4.32.0...v4.33.0) (2024-10-04)


### :sparkles: New Features

* **pdk-upgrade:** add mode input ([690a50c](https://github.com/myparcelnl/actions/commit/690a50c74aae0d3cb4184ce1eca06e4ebfec9bab))

## [4.32.0](https://github.com/myparcelnl/actions/compare/v4.31.1...v4.32.0) (2024-10-03)


### :sparkles: New Features

* **rebase-prs:** ignore forks by default ([d6599b3](https://github.com/myparcelnl/actions/commit/d6599b3bdd6115b9900f908cc089fb542980d851))

## [4.31.1](https://github.com/myparcelnl/actions/compare/v4.31.0...v4.31.1) (2024-10-02)


### :bug: Bug Fixes

* **composer:** update cache logic ([7461e2d](https://github.com/myparcelnl/actions/commit/7461e2d7b3a4c53a81ced1a716c7112911fbc98e))

## [4.31.0](https://github.com/myparcelnl/actions/compare/v4.30.0...v4.31.0) (2024-09-20)


### :sparkles: New Features

* **pdk:** add update-deps option to pdk release flow ([2022dca](https://github.com/myparcelnl/actions/commit/2022dcafabbe5b474e5c1b5350e6c8fd79866b6b))

## [4.30.0](https://github.com/myparcelnl/actions/compare/v4.29.0...v4.30.0) (2024-09-20)


### :sparkles: New Features

* add find-artifact ([3e710e4](https://github.com/myparcelnl/actions/commit/3e710e4b2dc7b97a9f3683c73771ee6d34f4090a))

## [4.29.0](https://github.com/myparcelnl/actions/compare/v4.28.4...v4.29.0) (2024-09-19)


### :sparkles: New Features

* **pdk:** extract root command logic to a single action ([8b99af8](https://github.com/myparcelnl/actions/commit/8b99af8c506be26e4ba2f1dc96de1a4c701f9add))
* **pr-assign-author:** handle authors that cannot be assigned ([6349201](https://github.com/myparcelnl/actions/commit/6349201585c9989391b908de1071838e2c591a6f))

## [4.28.4](https://github.com/myparcelnl/actions/compare/v4.28.3...v4.28.4) (2024-09-11)


### :bug: Bug Fixes

* **setup-node:** create .volta/tmp folder on install ([2ecd7c4](https://github.com/myparcelnl/actions/commit/2ecd7c488519f2c31bb98a8e03289a922ffff75f))

## [4.28.3](https://github.com/myparcelnl/actions/compare/v4.28.2...v4.28.3) (2024-09-11)


### :bug: Bug Fixes

* **setup-node:** fix folder permissions issue when using volta ([d7971d1](https://github.com/myparcelnl/actions/commit/d7971d138793fb5566276857f406846c063afca0))

## [4.28.2](https://github.com/myparcelnl/actions/compare/v4.28.1...v4.28.2) (2024-09-04)


### :bug: Bug Fixes

* **get-github-token:** add missing github credentials inputs ([ac96ed0](https://github.com/myparcelnl/actions/commit/ac96ed0c9d6f9f30b54e590cecd3ca9cd14eaf46))

## [4.28.1](https://github.com/myparcelnl/actions/compare/v4.28.0...v4.28.1) (2024-08-16)


### :bug: Bug Fixes

* **composer-install:** fix permission error on install ([179e117](https://github.com/myparcelnl/actions/commit/179e1176c4a3476b9cd7e2b3cd515280d7bca764))

## [4.28.0](https://github.com/myparcelnl/actions/compare/v4.27.1...v4.28.0) (2024-08-15)


### :sparkles: New Features

* **credentials:** add all inputs of actions/create-github-app-token ([38bc972](https://github.com/myparcelnl/actions/commit/38bc972a034bb2daa31afa7ffa95b57366488051))


### :bug: Bug Fixes

* **repository-dispatch:** create a token with the correct permissions to dispatch on another repository ([f258383](https://github.com/myparcelnl/actions/commit/f25838346aa3c36568c754753afb54a1d5f80fbf))

## [4.27.1](https://github.com/myparcelnl/actions/compare/v4.27.0...v4.27.1) (2024-08-14)


### :bug: Bug Fixes

* **workflows:** pass correct workflow url in failure notification webhook payload ([fadbc00](https://github.com/myparcelnl/actions/commit/fadbc00b56643487dfe5590fb8ff36a5285a3e71))

## [4.27.0](https://github.com/myparcelnl/actions/compare/v4.26.1...v4.27.0) (2024-08-14)


### :sparkles: New Features

* **semantic-release:** add working-directory input ([1324fa1](https://github.com/myparcelnl/actions/commit/1324fa193656833db1b51dd9328513fbae55c239))
* **workflows:** add reusable notify on failure action ([77b0c8b](https://github.com/myparcelnl/actions/commit/77b0c8bf5c9f3226cbedb3ba461b0e12fe56f349))

## [4.26.1](https://github.com/myparcelnl/actions/compare/v4.26.0...v4.26.1) (2024-08-07)


### :bug: Bug Fixes

* **setup-app-credentials:** set correct bot name and email ([38005df](https://github.com/myparcelnl/actions/commit/38005df165999af39e361c5a65d059e9005b6dea))

## [4.26.0](https://github.com/myparcelnl/actions/compare/v4.25.6...v4.26.0) (2024-08-07)


### :sparkles: New Features

* **setup-node:** improve volta installation ([88c2ae6](https://github.com/myparcelnl/actions/commit/88c2ae6e3677817aa621f24c18303e34b000ca09))

## [4.25.6](https://github.com/myparcelnl/actions/compare/v4.25.5...v4.25.6) (2024-08-07)


### :bug: Bug Fixes

* **codecov-action:** skip search when files are passed and skip glob if not needed ([8481e63](https://github.com/myparcelnl/actions/commit/8481e6329f07350cd0bb6ba9ddf1c30a78e563e1))

## [4.25.5](https://github.com/myparcelnl/actions/compare/v4.25.4...v4.25.5) (2024-08-07)


### :bug: Bug Fixes

* **pdk-upgrade:** fix checking pdk version ([4389400](https://github.com/myparcelnl/actions/commit/4389400e05e130f7abb6c88416d6220f176f248a))

## [4.25.4](https://github.com/myparcelnl/actions/compare/v4.25.3...v4.25.4) (2024-08-07)


### :bug: Bug Fixes

* **pdk-upgrade:** fix version parsing ([75f5222](https://github.com/myparcelnl/actions/commit/75f52229cf865da0c9b2c99617b5237143b97944))

## [4.25.3](https://github.com/myparcelnl/actions/compare/v4.25.2...v4.25.3) (2024-08-07)


### :bug: Bug Fixes

* **pdk-upgrade:** fix getting js pdk releases ([e24b1a9](https://github.com/myparcelnl/actions/commit/e24b1a930367b92ea71739ff933f36fd4b60e538))

## [4.25.2](https://github.com/myparcelnl/actions/compare/v4.25.1...v4.25.2) (2024-08-07)


### :bug: Bug Fixes

* **pdk-upgrade:** list js-pdk releases rather than getting the latest one ([c763adf](https://github.com/myparcelnl/actions/commit/c763adff5755e29872592258984ee51089bc41c3))

## [4.25.1](https://github.com/myparcelnl/actions/compare/v4.25.0...v4.25.1) (2024-08-07)


### :bug: Bug Fixes

* **pdk-upgrade:** use github token in rest request ([b165bad](https://github.com/myparcelnl/actions/commit/b165bad1f6387cf49085ef87e7d20a521815c2a7))

## [4.25.0](https://github.com/myparcelnl/actions/compare/v4.24.1...v4.25.0) (2024-08-07)


### :sparkles: New Features

* **pdk-upgrade:** allow omitting image input ([2f4877e](https://github.com/myparcelnl/actions/commit/2f4877eb29070fa48e28e25e8be72e72c8faeee9))
* **pdk-upgrade:** check if upgrade is needed before trying ([877d64c](https://github.com/myparcelnl/actions/commit/877d64ced50cf5528014031efcb799a78d562ac9))

## [4.24.1](https://github.com/myparcelnl/actions/compare/v4.24.0...v4.24.1) (2024-08-02)


### :bug: Bug Fixes

* **composer:** fix incorrect cache folder ([1939f89](https://github.com/myparcelnl/actions/commit/1939f89aaf824c0a55ab527966e96e21b5b0692a))

## [4.24.0](https://github.com/myparcelnl/actions/compare/v4.23.0...v4.24.0) (2024-08-02)


### :sparkles: New Features

* **pdk-builder:** pass -vvv when debug is enabled ([4c75c16](https://github.com/myparcelnl/actions/commit/4c75c16b8cfa838623ef94c446eda65f9fe27cbb))

## [4.23.0](https://github.com/myparcelnl/actions/compare/v4.22.1...v4.23.0) (2024-08-02)


### :sparkles: New Features

* **codecov-action:** replace update-coverage with new codecov-action ([577d9cc](https://github.com/myparcelnl/actions/commit/577d9cc1ef9d1337bdd25290445adaf0c019624b))

## [4.22.1](https://github.com/myparcelnl/actions/compare/v4.22.0...v4.22.1) (2024-08-02)


### :bug: Bug Fixes

* **composer-pest:** fix reference to env file ([6ead462](https://github.com/myparcelnl/actions/commit/6ead4624ef0f64565184b58e2921110e5bb86508))

## [4.22.0](https://github.com/myparcelnl/actions/compare/v4.21.6...v4.22.0) (2024-08-02)


### :sparkles: New Features

* **setup-app-credentials:** switch to official create app token action ([6f34d1e](https://github.com/myparcelnl/actions/commit/6f34d1e5f488f71717323fa2871859506c57ba5d))

## [4.21.6](https://github.com/myparcelnl/actions/compare/v4.21.5...v4.21.6) (2024-08-01)


### :bug: Bug Fixes

* **composer-pest:** add missing env file variable ([9e908fb](https://github.com/myparcelnl/actions/commit/9e908fbbf5a45f2f29795b3c7c3439c5ffec4964))

## [4.21.5](https://github.com/myparcelnl/actions/compare/v4.21.4...v4.21.5) (2024-08-01)


### :bug: Bug Fixes

* **create-cache-keys:** use inputs instead of env ([d8a886e](https://github.com/myparcelnl/actions/commit/d8a886e931e8fc7887ad28d0a3b3fa8acca04a24))

## [4.21.4](https://github.com/myparcelnl/actions/compare/v4.21.3...v4.21.4) (2024-08-01)


### :bug: Bug Fixes

* **deps:** check in more missing dependencies ([a71681a](https://github.com/myparcelnl/actions/commit/a71681a0978fdbdec283bee50d572e48dc46ab5b))

## [4.21.3](https://github.com/myparcelnl/actions/compare/v4.21.2...v4.21.3) (2024-08-01)


### :bug: Bug Fixes

* **deps:** check proper node_modules in to git ([2fc4688](https://github.com/myparcelnl/actions/commit/2fc4688ae09a88e1a4fac5b716f06ec1500aee64))

## [4.21.2](https://github.com/myparcelnl/actions/compare/v4.21.1...v4.21.2) (2024-08-01)


### :bug: Bug Fixes

* **release:** properly commit created dist files on release ([31318a8](https://github.com/myparcelnl/actions/commit/31318a896a95e2af989f049de8600d3ceebc7d4f))

## [4.21.1](https://github.com/myparcelnl/actions/compare/v4.21.0...v4.21.1) (2024-08-01)


### :bug: Bug Fixes

* **bun-install:** use os arch in cache key ([3090bdc](https://github.com/myparcelnl/actions/commit/3090bdc38614e6a2f31ffff461d4255265ecb17d))
* **nx:** simplify cache logic ([e0d0920](https://github.com/myparcelnl/actions/commit/e0d09200ba387957d388f06b912c12fcd3f5cd11))
* **pull-docker-image:** include os arch in cache ([4d90131](https://github.com/myparcelnl/actions/commit/4d9013108bd6433ed9d730a32a0f52c11117cc9f))
* **yarn-install:** fix args input ([405212d](https://github.com/myparcelnl/actions/commit/405212d712f56c4cab8e6e9cf1928290e3123331))
* **yarn-install:** include os arch in cache ([7cb1e76](https://github.com/myparcelnl/actions/commit/7cb1e769ae0b8c86213ecef42206d1b0e14ab960))
* **yarn-install:** use actual node version in cache keys ([9331efd](https://github.com/myparcelnl/actions/commit/9331efde6dfc197b871efdf009cf00fe2db1e01e))

## [4.21.0](https://github.com/myparcelnl/actions/compare/v4.20.3...v4.21.0) (2024-08-01)


### :sparkles: New Features

* add create-cache-keys ([355f685](https://github.com/myparcelnl/actions/commit/355f68591cfd2db186a7b6d32928fc0a13aa7e99))


### :bug: Bug Fixes

* **setup-node:** increase retry delay to 5 seconds ([a4cab07](https://github.com/myparcelnl/actions/commit/a4cab07ddc9ddf65b960b6bec499db298320401e))

## [4.20.3](https://github.com/myparcelnl/actions/compare/v4.20.2...v4.20.3) (2024-07-31)


### :bug: Bug Fixes

* **composer:** fix error when no composer env variables are present ([cfe56d6](https://github.com/myparcelnl/actions/commit/cfe56d67e7359803e3f0b5f69b74bcb98dc8db03))

## [4.20.2](https://github.com/myparcelnl/actions/compare/v4.20.1...v4.20.2) (2024-07-31)


### :zap: Performance Improvements

* **pdk:** remove wildcards before default vendor files ([1fb7f2d](https://github.com/myparcelnl/actions/commit/1fb7f2d6cb1f5b2a54df7db039f291fadbc04064))


### :bug: Bug Fixes

* **composer-install:** reset permissions of composer cache ([95fe5a5](https://github.com/myparcelnl/actions/commit/95fe5a58bf1bb389c99b5246b472602f7a7d75d7))
* **pdk:** get nx cache if needed ([9f4a1c6](https://github.com/myparcelnl/actions/commit/9f4a1c66ecc6fb749a11c3e5a6e84ac9ac53177f))
* **setup-node:** add retries to getting node version ([fa39225](https://github.com/myparcelnl/actions/commit/fa39225f6ff8f4a1d367bd3a1bd4f39f22156448))

## [4.20.1](https://github.com/myparcelnl/actions/compare/v4.20.0...v4.20.1) (2024-07-31)


### :bug: Bug Fixes

* **pdk:** include checkout step in prerelease actions ([5cf96b0](https://github.com/myparcelnl/actions/commit/5cf96b02c2811ad17efa043d2493c67214ece185))
* **pdk:** remove ignore platform req env variable for now as it creates warnings ([fde9566](https://github.com/myparcelnl/actions/commit/fde956630291fa9d25e865ad2e2a3aa26d87074d))

## [4.20.0](https://github.com/myparcelnl/actions/compare/v4.19.3...v4.20.0) (2024-07-31)


### :bug: Bug Fixes

* **composer:** expose the created env file filename ([ebc4203](https://github.com/myparcelnl/actions/commit/ebc4203f8e24c55d318773cf179ecd181295f0a1))
* **pdk:** expose the created env file filename ([3577df3](https://github.com/myparcelnl/actions/commit/3577df30a30a06fc1c414a543d6c73ef759f24ad))
* **pdk:** normalize used vendor cache key ([17a7a4f](https://github.com/myparcelnl/actions/commit/17a7a4f06919a172eab77a11525741ebddf16a3a))
* **pdk:** remove lib-* from ignored platform reqs ([edc4d2f](https://github.com/myparcelnl/actions/commit/edc4d2fd548c3e16ecc5ec61709c2a58e9c5a7f2))


### :sparkles: New Features

* **pdk:** add pdk-semantic-release ([2a576de](https://github.com/myparcelnl/actions/commit/2a576de6a3d37a6ed1d84270049d3eb701fe9e7e))

## [4.19.3](https://github.com/myparcelnl/actions/compare/v4.19.2...v4.19.3) (2024-07-31)


### :bug: Bug Fixes

* **pdk:** fix action name ([092e41b](https://github.com/myparcelnl/actions/commit/092e41bb905147f27db0f4967c852219db0c740d))

## [4.19.2](https://github.com/myparcelnl/actions/compare/v4.19.1...v4.19.2) (2024-07-31)


### :bug: Bug Fixes

* **composer:** incorporate present composer environment variables in commands ([ccaa24a](https://github.com/myparcelnl/actions/commit/ccaa24a1c9b5592f3c156980e144bafa5e616114))
* **pdk:** use composer env variables ([218bba7](https://github.com/myparcelnl/actions/commit/218bba7a891d4dda3c016cc0d0ba102fd4eb0359))

## [4.19.1](https://github.com/myparcelnl/actions/compare/v4.19.0...v4.19.1) (2024-07-31)


### :bug: Bug Fixes

* **pdk:** set COMPOSER_NO_DEV variable ([483c337](https://github.com/myparcelnl/actions/commit/483c337106f446a78da096abdcd07d686f29c87a))

## [4.19.0](https://github.com/myparcelnl/actions/compare/v4.18.3...v4.19.0) (2024-07-31)


### :sparkles: New Features

* **pdk:** simplify pdk actions ([df191b2](https://github.com/myparcelnl/actions/commit/df191b2e08d12879739bdd48d800346ee3cb2b48))

## [4.18.3](https://github.com/myparcelnl/actions/compare/v4.18.2...v4.18.3) (2024-07-25)


### :bug: Bug Fixes

* **pdk:** fix input of hash files function ([3a0cd9b](https://github.com/myparcelnl/actions/commit/3a0cd9bb06a8fe4a672fa3eed1d8347cd9eed01f))

## [4.18.2](https://github.com/myparcelnl/actions/compare/v4.18.1...v4.18.2) (2024-07-25)


### :bug: Bug Fixes

* **pdk:** fix input of glob.create ([1c4f0c1](https://github.com/myparcelnl/actions/commit/1c4f0c1a9360bd7588e03aeb8b5265df7e838fb4))

## [4.18.1](https://github.com/myparcelnl/actions/compare/v4.18.0...v4.18.1) (2024-07-25)


### :bug: Bug Fixes

* **pdk:** fix hashing files in cache action ([7f19944](https://github.com/myparcelnl/actions/commit/7f19944287ff60ec998b38b12ab1933b3993cb7a))

## [4.18.0](https://github.com/myparcelnl/actions/compare/v4.17.7...v4.18.0) (2024-07-25)


### :bug: Bug Fixes

* **pdk:** improve cache logic ([1932771](https://github.com/myparcelnl/actions/commit/1932771ce2e0f2073fa4b4f331f5151b99a55d02))


### :sparkles: New Features

* add hash-string ([36ff1fc](https://github.com/myparcelnl/actions/commit/36ff1fc9dccfa430c3deae4323e2b4c097c35214))
* **composer-install:** hash the composer flags instead of using them as is for cache ([9606a8b](https://github.com/myparcelnl/actions/commit/9606a8baabb035b24df4754b26937f770a2f1d4c))
* **setup-node:** output final used node version ([a351209](https://github.com/myparcelnl/actions/commit/a351209dec75fb75ed68a9d3e17ed4a7e1ca9254))
* **yarn-install:** hash yarn args rather than using them as is ([7b00aa4](https://github.com/myparcelnl/actions/commit/7b00aa4ceae64a68611d734cb7ec6125eaa6c87f))

## [4.17.7](https://github.com/myparcelnl/actions/compare/v4.17.6...v4.17.7) (2024-07-25)


### :bug: Bug Fixes

* **pdk:** fix wrong reference to step ([20a2e97](https://github.com/myparcelnl/actions/commit/20a2e97de550820436f16c81b62ff7cc2be447ae))

## [4.17.6](https://github.com/myparcelnl/actions/compare/v4.17.5...v4.17.6) (2024-07-25)


### :bug: Bug Fixes

* **composer-install:** change permissions of vendor after install ([97e2c2e](https://github.com/myparcelnl/actions/commit/97e2c2e3bd36b341cbdf18d9a8d8192e44881567))
* **pdk:** pass files instead of pre-made hashes for caching ([d180881](https://github.com/myparcelnl/actions/commit/d18088189b3d4caf322c40117e1617b1d449c33b))

## [4.17.5](https://github.com/myparcelnl/actions/compare/v4.17.4...v4.17.5) (2024-07-25)


### :bug: Bug Fixes

* **composer-install:** create packagist cache folder before installing ([2be8654](https://github.com/myparcelnl/actions/commit/2be8654c7941ee9f3ad18d0fe6f67fa0a51e28cb))
* **pdk:** ignore platform reqs for extensions and libs only and not php ([4bab0d5](https://github.com/myparcelnl/actions/commit/4bab0d55a0a92429e68ce6534b434cbe7065aac7))

## [4.17.4](https://github.com/myparcelnl/actions/compare/v4.17.3...v4.17.4) (2024-07-25)


### :bug: Bug Fixes

* **composer-install:** use different approach of changing cache permissions ([68a491b](https://github.com/myparcelnl/actions/commit/68a491bf957b22aa16b692acc302a21c8e1196a6))

## [4.17.3](https://github.com/myparcelnl/actions/compare/v4.17.2...v4.17.3) (2024-07-25)


### :bug: Bug Fixes

* **composer-install:** fix cache folder permissions before installing ([55996c4](https://github.com/myparcelnl/actions/commit/55996c4d9762496e9500452d8116c4c51474e8b3))

## [4.17.2](https://github.com/myparcelnl/actions/compare/v4.17.1...v4.17.2) (2024-07-24)


### :bug: Bug Fixes

* **pdk-custom-build:** fix yarn and composer install ([5ef377d](https://github.com/myparcelnl/actions/commit/5ef377dba2a80770bb97e7209e7cd96725f24d75))

## [4.17.1](https://github.com/myparcelnl/actions/compare/v4.17.0...v4.17.1) (2024-07-24)


### :bug: Bug Fixes

* **pdk-custom-build:** add missing image output ([606ac00](https://github.com/myparcelnl/actions/commit/606ac005d62fce1809077df0970457faf481332c))

## [4.17.0](https://github.com/myparcelnl/actions/compare/v4.16.2...v4.17.0) (2024-07-24)


### :bug: Bug Fixes

* **setup-node:** add a retry in case volta setup fails ([ac772fa](https://github.com/myparcelnl/actions/commit/ac772fa0dfb0c6e4a30e58375246af61c4635d16))


### :sparkles: New Features

* **pdk:** add pdk-custom-build actions ([0ed92db](https://github.com/myparcelnl/actions/commit/0ed92dbb362bd9ecab395fffc05acd776ad47246))

## [4.16.2](https://github.com/myparcelnl/actions/compare/v4.16.1...v4.16.2) (2024-07-24)


### :bug: Bug Fixes

* **pdk:** allow passing yarn-args ([4888d1c](https://github.com/myparcelnl/actions/commit/4888d1c867404380af1d402fbddee0f9682df532))
* **yarn-install:** remove forced --frozen-lockfile parameter ([aa87c3e](https://github.com/myparcelnl/actions/commit/aa87c3e3b9cb9d1b1307824c3cd7281ad5b89850))

## [4.16.1](https://github.com/myparcelnl/actions/compare/v4.16.0...v4.16.1) (2024-07-24)


### :bug: Bug Fixes

* **pdk:** do not use duplicate step ids ([dba4b31](https://github.com/myparcelnl/actions/commit/dba4b31a3e979da8ab312d809e603c801c2d7199))

## [4.16.0](https://github.com/myparcelnl/actions/compare/v4.15.0...v4.16.0) (2024-07-24)


### :bug: Bug Fixes

* **composer-install:** make cache depend on command input ([28e0d79](https://github.com/myparcelnl/actions/commit/28e0d791d5e49ad12de69042aba0a9356715bde8))
* **composer-update:** make command work as expected ([43d4715](https://github.com/myparcelnl/actions/commit/43d47154f3d93758e73da8cf513827fa698a943a))


### :sparkles: New Features

* **pdk:** allow choosing between composer update and install ([d52d8e1](https://github.com/myparcelnl/actions/commit/d52d8e17bbb92dd11fb13ad2374078eae8f2e204))

## [4.15.0](https://github.com/myparcelnl/actions/compare/v4.14.0...v4.15.0) (2024-07-18)


### :sparkles: New Features

* **build-docker-image-reg:** add default values to inputs ([9a1c5a2](https://github.com/myparcelnl/actions/commit/9a1c5a2a7ca694b7e9122c1fa2209b7696160912))
* **build-docker-image:** add default values to inputs ([768c0bf](https://github.com/myparcelnl/actions/commit/768c0bf4aa8d484de3eba2331a5ba4b4d504f708))

## [4.14.0](https://github.com/myparcelnl/actions/compare/v4.13.4...v4.14.0) (2024-07-18)


### :sparkles: New Features

* **build-docker-image-reg:** update version of used actions ([97c3d8f](https://github.com/myparcelnl/actions/commit/97c3d8f08bfe2df075d2b6c0ac75a018c8811677))

## [4.13.4](https://github.com/myparcelnl/actions/compare/v4.13.3...v4.13.4) (2024-07-17)


### :bug: Bug Fixes

* **setup-node:** check if correct key exists before using volta ([ed16829](https://github.com/myparcelnl/actions/commit/ed16829ad6843c550cadcfaec440f8b44cf98467))

## [4.13.3](https://github.com/myparcelnl/actions/compare/v4.13.2...v4.13.3) (2024-07-12)


### :bug: Bug Fixes

* **setup-node:** support overriding volta node version ([6d700f8](https://github.com/myparcelnl/actions/commit/6d700f8c0dafb013252d5cad3bb0f00e906e0935))

## [4.13.2](https://github.com/myparcelnl/actions/compare/v4.13.1...v4.13.2) (2024-07-12)


### :bug: Bug Fixes

* **composer-behat:** inherit host permissions ([a57cfc2](https://github.com/myparcelnl/actions/commit/a57cfc2f123896078a18974e9648b3596249e9bb))
* **composer-install:** inherit host permissions ([589c5a6](https://github.com/myparcelnl/actions/commit/589c5a6f3b6f46de7fea92d489fc52df72bfc41c))
* **composer-pest:** inherit host permissions ([b97bc52](https://github.com/myparcelnl/actions/commit/b97bc5235daa4132280cd74cd1f6c7224882c82b))
* **composer-phpstan:** inherit host permissions ([0801fee](https://github.com/myparcelnl/actions/commit/0801feea4fda7579dabeaac25cb5ccbb5ef53642))

## [4.13.1](https://github.com/myparcelnl/actions/compare/v4.13.0...v4.13.1) (2024-07-12)


### :bug: Bug Fixes

* **npm-install:** remove node version default ([8bf895d](https://github.com/myparcelnl/actions/commit/8bf895d294125846545584213dc3134ef610082e))
* **pdk-setup:** remove node version default ([ed757d8](https://github.com/myparcelnl/actions/commit/ed757d85937a938621ce53a6a0f7671e863d35d5))
* **pnpm-install:** remove node version default ([ceb02e8](https://github.com/myparcelnl/actions/commit/ceb02e81a8c226d4e3e8e4e83d28d7f5eaa2a4fe))

## [4.13.0](https://github.com/myparcelnl/actions/compare/v4.12.3...v4.13.0) (2024-07-12)


### :sparkles: New Features

* add setup-node ([98f1a6a](https://github.com/myparcelnl/actions/commit/98f1a6aca31c6e34e5e31de0866133923f9197fb))
* **npm-install:** support using volta ([81bf081](https://github.com/myparcelnl/actions/commit/81bf0812776de3186fa4246227ff17c7988e1c26))
* **pdk:** support using volta ([f8453d8](https://github.com/myparcelnl/actions/commit/f8453d8b870fb4dc558ecc8c484be74dd24a1bc2))
* **pnpm-install:** support using volta ([7802208](https://github.com/myparcelnl/actions/commit/7802208c926c62cfe0c674d20846ffb06eaa9671))
* **yarn-install:** support using volta ([8501b7d](https://github.com/myparcelnl/actions/commit/8501b7d17a0fa9bfa951803632bd132be789c388))

## [4.12.3](https://github.com/myparcelnl/actions/compare/v4.12.2...v4.12.3) (2024-07-11)


### :bug: Bug Fixes

* **pdk-upgrade:** fix error when report file does not exist ([59b25f9](https://github.com/myparcelnl/actions/commit/59b25f9e9fd9ebb8ee8679dff629ad06eb3d89a1))

## [4.12.2](https://github.com/myparcelnl/actions/compare/v4.12.1...v4.12.2) (2024-07-11)


### :bug: Bug Fixes

* **pdk-upgrade:** do not try to post comment if not triggered from pr ([2e15404](https://github.com/myparcelnl/actions/commit/2e1540491051624bdcbd49b343866ce046220fbe))
* **pdk-upgrade:** sort upgraded entries in summary ([e3eda8a](https://github.com/myparcelnl/actions/commit/e3eda8ac66a1d3da2f444f23962ac15d0d633dfe))

## [4.12.1](https://github.com/myparcelnl/actions/compare/v4.12.0...v4.12.1) (2024-07-11)


### :bug: Bug Fixes

* **pdk:** add app id and private key parameters ([0f6514e](https://github.com/myparcelnl/actions/commit/0f6514e169760165ee9830d9b986322eaada3f98))

## [4.12.0](https://github.com/myparcelnl/actions/compare/v4.11.1...v4.12.0) (2024-07-11)


### :bug: Bug Fixes

* **pr-post-artifacts:** support multiple bot comments in the same pr ([ea63a1e](https://github.com/myparcelnl/actions/commit/ea63a1e5dd4d1efbf5d586f3f811627fe8c69e47))


### :sparkles: New Features

* add create-or-update-comment ([b2e1cd9](https://github.com/myparcelnl/actions/commit/b2e1cd9b67f2206cdec5d0d6344995e7f6da1183))
* **pdk:** write report when running upgrade ([bd94340](https://github.com/myparcelnl/actions/commit/bd943407ded9ec5012f325e185b20d28c946e6e3))

## [4.11.1](https://github.com/myparcelnl/actions/compare/v4.11.0...v4.11.1) (2024-07-11)


### :bug: Bug Fixes

* **pdk:** add no-check to prerelease commands ([e7f8ab2](https://github.com/myparcelnl/actions/commit/e7f8ab295ddbad91f566b74f2453a5a7b2671b4d))

## [4.11.0](https://github.com/myparcelnl/actions/compare/v4.10.2...v4.11.0) (2024-07-10)


### :sparkles: New Features

* add has-refs-between ([58e7a50](https://github.com/myparcelnl/actions/commit/58e7a5017e624390f5719d27d847a4d41b81caf1))

## [4.10.2](https://github.com/myparcelnl/actions/compare/v4.10.1...v4.10.2) (2024-06-07)


### :bug: Bug Fixes

* **yarn-install:** remove hardened mode env as it causes errors in some versions ([35410b0](https://github.com/myparcelnl/actions/commit/35410b017af16598d87cd26e8312da2ea98bd50e))

## [4.10.1](https://github.com/myparcelnl/actions/compare/v4.10.0...v4.10.1) (2024-06-05)


### :zap: Performance Improvements

* **yarn-install:** increase speed by disabling hardened mode ([765ff54](https://github.com/myparcelnl/actions/commit/765ff54ef48518ceaa5805acb5ade1dfa03b22ca))

## [4.10.0](https://github.com/myparcelnl/actions/compare/v4.9.3...v4.10.0) (2024-05-30)


### :bug: Bug Fixes

* **nx:** update cache logic ([a83ca27](https://github.com/myparcelnl/actions/commit/a83ca27e4cb87124484dd0ff59b5100fab5ffd93))
* **update-tags:** update node runtime to 20 ([9f992f5](https://github.com/myparcelnl/actions/commit/9f992f54f3f61e5063723aba49feafe0ca0d5c41))


### :sparkles: New Features

* add nx-run ([c485afb](https://github.com/myparcelnl/actions/commit/c485afb75fd50b5a101d6ff030387c3c4b26fa3b))
* **semantic-release:** add standalone dry-run input ([512f5f2](https://github.com/myparcelnl/actions/commit/512f5f2885833bb4cae0a7194d1e97c9d0883345))

## [4.9.3](https://github.com/myparcelnl/actions/compare/v4.9.2...v4.9.3) (2024-04-24)


### :bug: Bug Fixes

* **nx:** update cache logic ([c13f43c](https://github.com/myparcelnl/actions/commit/c13f43c6b2a48e1638a7fe37bc26b233affe46cd))

## [4.9.2](https://github.com/myparcelnl/actions/compare/v4.9.1...v4.9.2) (2024-04-16)


### :bug: Bug Fixes

* **nx:** update cache key ([edce084](https://github.com/myparcelnl/actions/commit/edce0842c1d62a0f9bfdef371093a777299f4f17))

## [4.9.1](https://github.com/myparcelnl/actions/compare/v4.9.0...v4.9.1) (2024-04-16)


### :bug: Bug Fixes

* **nx:** fix caching ([1204ce4](https://github.com/myparcelnl/actions/commit/1204ce4417f1da52e27a539f8528282d346fac2a))

## [4.9.0](https://github.com/myparcelnl/actions/compare/v4.8.1...v4.9.0) (2024-04-16)


### :sparkles: New Features

* add composer-phpstan ([e1b94b3](https://github.com/myparcelnl/actions/commit/e1b94b35da350dded9de22879418ebd4cb7711d8))


### :bug: Bug Fixes

* **pdk:** run cache after upgrade on prerelease ([66155f7](https://github.com/myparcelnl/actions/commit/66155f78f5a2a96fab4fbaa487b7d48ccc1061b8))

## [4.8.1](https://github.com/myparcelnl/actions/compare/v4.8.0...v4.8.1) (2024-04-15)


### :bug: Bug Fixes

* **composer-behat:** add args input ([978b37d](https://github.com/myparcelnl/actions/commit/978b37d3b0a744f7767a06883a965db5ea88dc08))
* **composer-pest:** add args input ([bf041ea](https://github.com/myparcelnl/actions/commit/bf041ea8211f867aaed21d885dbff452b0920f88))

## [4.8.0](https://github.com/myparcelnl/actions/compare/v4.7.2...v4.8.0) (2024-04-15)


### :bug: Bug Fixes

* **pdk:** update inputs ([511a247](https://github.com/myparcelnl/actions/commit/511a2472b888c7a0bc7d55f4ffd8a70aab48aeb5))


### :sparkles: New Features

* add composer-behat ([dd7f30b](https://github.com/myparcelnl/actions/commit/dd7f30bfc234493d3774c0759b9a6d7b367907aa))
* add composer-pest ([c6a39c3](https://github.com/myparcelnl/actions/commit/c6a39c3a8edb9c9745a14039d8cf9befdddc2868))
* **rebase:** allow using github app directly ([8a922ae](https://github.com/myparcelnl/actions/commit/8a922ae17039a4438392162d68bf8338000ee489))

## [4.7.2](https://github.com/myparcelnl/actions/compare/v4.7.1...v4.7.2) (2024-04-15)


### :bug: Bug Fixes

* **pdk:** update action inputs ([ff8aef7](https://github.com/myparcelnl/actions/commit/ff8aef77fcbea765b0cf28391b68cb4ce38b0e91))

## [4.7.1](https://github.com/myparcelnl/actions/compare/v4.7.0...v4.7.1) (2024-04-15)


### :bug: Bug Fixes

* **pdk:** add php version input ([d71936a](https://github.com/myparcelnl/actions/commit/d71936a4705a7cebad30f0ce54c312a95015b9cd))

## [4.7.0](https://github.com/myparcelnl/actions/compare/v4.6.4...v4.7.0) (2024-04-15)


### :sparkles: New Features

* **pdk:** add pdk actions ([560747a](https://github.com/myparcelnl/actions/commit/560747a38071cd91cd68c371b14f556b1f27c6ad))

## [4.6.4](https://github.com/myparcelnl/actions/compare/v4.6.3...v4.6.4) (2024-04-12)


### :bug: Bug Fixes

* **nx:** update cache strategy ([d5d49c1](https://github.com/myparcelnl/actions/commit/d5d49c1e5e7fc10f5ded4c37e2b2587114d02998))

## [4.6.3](https://github.com/myparcelnl/actions/compare/v4.6.2...v4.6.3) (2024-04-05)


### :bug: Bug Fixes

* **nx:** update cache strategy ([d4e2ee0](https://github.com/myparcelnl/actions/commit/d4e2ee0bb22ee63b3932dca4065c1cd598d0d784))

## [4.6.2](https://github.com/myparcelnl/actions/compare/v4.6.1...v4.6.2) (2024-04-05)


### :bug: Bug Fixes

* **nx-run-many:** fix saving nx cache ([0010b62](https://github.com/myparcelnl/actions/commit/0010b62c2b0dde212f90b4c2ae79f7dbdfd45757))

## [4.6.1](https://github.com/myparcelnl/actions/compare/v4.6.0...v4.6.1) (2024-04-05)


### :bug: Bug Fixes

* **nx-cache:** fix saving nx cache ([bd42c73](https://github.com/myparcelnl/actions/commit/bd42c73766395c35eede39a2afdb4946af31c21d))

## [4.6.0](https://github.com/myparcelnl/actions/compare/v4.5.0...v4.6.0) (2024-04-05)


### :sparkles: New Features

* **nx:** allow changing cache directories in nx actions ([d45e65e](https://github.com/myparcelnl/actions/commit/d45e65e886a9e945e0b3a05eda2cb76eab410543))

## [4.5.0](https://github.com/myparcelnl/actions/compare/v4.4.1...v4.5.0) (2024-04-05)


### :sparkles: New Features

* add rebase-prs ([dca96ca](https://github.com/myparcelnl/actions/commit/dca96ca2adc3276004d804941edf4815a2fc6af0))
* add repository-dispatch ([453821f](https://github.com/myparcelnl/actions/commit/453821f40edaf399938dc4ed58a826a5880ff28b))

## [4.4.1](https://github.com/myparcelnl/actions/compare/v4.4.0...v4.4.1) (2024-04-04)


### :bug: Bug Fixes

* **nx-run-many:** ignore unknown local cache error ([fbcfa54](https://github.com/myparcelnl/actions/commit/fbcfa54219a55138ac5b52275a492ae9dce55627))

## [4.4.0](https://github.com/myparcelnl/actions/compare/v4.3.2...v4.4.0) (2024-04-04)


### :bug: Bug Fixes

* **pr-assign-author:** pass github token to actions/github-script ([1056f72](https://github.com/myparcelnl/actions/commit/1056f7274a1cb73ed30e05785b288b7d0e309452))


### :sparkles: New Features

* update all github-script actions to v7 ([8294784](https://github.com/myparcelnl/actions/commit/8294784090e206f6c420e3b622769f7adace2652))

## [4.3.2](https://github.com/myparcelnl/actions/compare/v4.3.1...v4.3.2) (2024-03-28)


### :bug: Bug Fixes

* **nx-cache:** fix cache strategy ([dbdc475](https://github.com/myparcelnl/actions/commit/dbdc475620f6e9f6b985d69dcc42461ab9cb3819))

## [4.3.1](https://github.com/myparcelnl/actions/compare/v4.3.0...v4.3.1) (2024-03-20)


### :bug: Bug Fixes

* **nx-cache:** fix errors ([80f33d5](https://github.com/myparcelnl/actions/commit/80f33d51220e2fae61a1c63d9cf6c40f271e8e91))

## [4.3.0](https://github.com/myparcelnl/actions/compare/v4.2.1...v4.3.0) (2024-03-20)


### :sparkles: New Features

* **nx-cache:** add cache pruning ([559e837](https://github.com/myparcelnl/actions/commit/559e837ac2833871ff93151af81ff3638e27c707))

## [4.2.1](https://github.com/myparcelnl/actions/compare/v4.2.0...v4.2.1) (2024-03-20)


### :bug: Bug Fixes

* **nx-run-many:** use npx as default prefix ([8d03a81](https://github.com/myparcelnl/actions/commit/8d03a81dd4b90a344985de78a3445bae96602d43))

## [4.2.0](https://github.com/myparcelnl/actions/compare/v4.1.0...v4.2.0) (2024-03-20)


### :sparkles: New Features

* add pr-post-artifacts ([2b31c76](https://github.com/myparcelnl/actions/commit/2b31c762f507059e8aae86c3775452a47de10f31))

## [4.1.0](https://github.com/myparcelnl/actions/compare/v4.0.2...v4.1.0) (2024-03-13)


### :sparkles: New Features

* add nx run-many and deprecated actions ([ea4f6f2](https://github.com/myparcelnl/actions/commit/ea4f6f20d47c5776fe6011911231815e14592bb3))

## [4.0.2](https://github.com/myparcelnl/actions/compare/v4.0.1...v4.0.2) (2024-02-23)


### :bug: Bug Fixes

* **composer-install:** fix issues with cache keys ([ddab17f](https://github.com/myparcelnl/actions/commit/ddab17f4e7e96a762b69fb33b206662d3254fc50))

## [4.0.1](https://github.com/myparcelnl/actions/compare/v4.0.0...v4.0.1) (2024-02-07)


### :bug: Bug Fixes

* **pnpm-install:** use corepack enable instead of pnpm/action-setup ([01481f8](https://github.com/myparcelnl/actions/commit/01481f855f89bb693bf0633e4bef48ed8a143233))

## [4.0.0](https://github.com/myparcelnl/actions/compare/v3.18.0...v4.0.0) (2024-02-07)


### ⚠ BREAKING CHANGES

* remove myparcelnl/setup-node
* remove myparcelnl/yarn2-install
* default node version for all actions is now 20
* default pnpm version for pnpm-install is now 8.15.1

### :sparkles: New Features

* update node runtime to 20 ([935818f](https://github.com/myparcelnl/actions/commit/935818f402bbd159126bfc9cba16f4ff41482147))

## [3.18.0](https://github.com/myparcelnl/actions/compare/v3.17.2...v3.18.0) (2024-02-07)


### :sparkles: New Features

* **pnpm-install:** update pnpm/action-setup to v2.4.0 ([01294c0](https://github.com/myparcelnl/actions/commit/01294c09926418943959d3a427a000677fb1f23a))

## [3.17.2](https://github.com/myparcelnl/actions/compare/v3.17.1...v3.17.2) (2023-11-13)


### :bug: Bug Fixes

* **yarn-install:** include node version in cache key ([db4d48c](https://github.com/myparcelnl/actions/commit/db4d48c8cce5b60a29cb23fd73e56ef01280862a))

## [3.17.1](https://github.com/myparcelnl/actions/compare/v3.17.0...v3.17.1) (2023-10-24)


### :bug: Bug Fixes

* **deps:** bump actions/checkout from 3 to 4 ([#61](https://github.com/myparcelnl/actions/issues/61)) ([c38d3a3](https://github.com/myparcelnl/actions/commit/c38d3a36b8bfe6c0e47052f19c6641f624adba68)), closes [actions/checkout#1436](https://github.com/actions/checkout/issues/1436) [actions/checkout#1067](https://github.com/actions/checkout/issues/1067) [actions/checkout#1447](https://github.com/actions/checkout/issues/1447) [actions/checkout#1436](https://github.com/actions/checkout/issues/1436) [actions/checkout#1067](https://github.com/actions/checkout/issues/1067) [actions/checkout#1377](https://github.com/actions/checkout/issues/1377) [actions/checkout#579](https://github.com/actions/checkout/issues/579) [actions/checkout#1437](https://github.com/actions/checkout/issues/1437) [actions/checkout#579](https://github.com/actions/checkout/issues/579) [actions/checkout#1437](https://github.com/actions/checkout/issues/1437) [actions/checkout#1196](https://github.com/actions/checkout/issues/1196) [actions/checkout#1287](https://github.com/actions/checkout/issues/1287) [actions/checkout#1369](https://github.com/actions/checkout/issues/1369) [actions/checkout#1376](https://github.com/actions/checkout/issues/1376) [actions/checkout#1196](https://github.com/actions/checkout/issues/1196) [actions/checkout#1287](https://github.com/actions/checkout/issues/1287) [actions/checkout#1369](https://github.com/actions/checkout/issues/1369) [actions/checkout#1289](https://github.com/actions/checkout/issues/1289) [#1286](https://github.com/myparcelnl/actions/issues/1286) [actions/checkout#1246](https://github.com/actions/checkout/issues/1246) [actions/checkout#1246](https://github.com/actions/checkout/issues/1246) [#770](https://github.com/myparcelnl/actions/issues/770) [actions/checkout#1057](https://github.com/actions/checkout/issues/1057) [#1447](https://github.com/myparcelnl/actions/issues/1447) [#1067](https://github.com/myparcelnl/actions/issues/1067) [#1436](https://github.com/myparcelnl/actions/issues/1436)

## [3.17.0](https://github.com/myparcelnl/actions/compare/v3.16.0...v3.17.0) (2023-10-24)


### :sparkles: New Features

* add stale ([8d9d4c9](https://github.com/myparcelnl/actions/commit/8d9d4c98a56425909d0b217490156e2f471f73da))


### :bug: Bug Fixes

* **bun-install:** declare shell ([17e04e9](https://github.com/myparcelnl/actions/commit/17e04e9fc28d97dad96b5d0d385b34579ced7a20))

## [3.16.0](https://github.com/myparcelnl/actions/compare/v3.15.2...v3.16.0) (2023-09-26)


### :sparkles: New Features

* add bun-install ([9ed9e63](https://github.com/myparcelnl/actions/commit/9ed9e63cfc2f19f28ed392234ce7dc37359cccb6))

## [3.15.2](https://github.com/myparcelnl/actions/compare/v3.15.1...v3.15.2) (2023-09-15)


### :bug: Bug Fixes

* **pr-label-by-review:** fix rulesets not being read ([#63](https://github.com/myparcelnl/actions/issues/63)) ([e796d54](https://github.com/myparcelnl/actions/commit/e796d54473020ff6314c5d83c4984d4a2a024814))

## [3.15.1](https://github.com/myparcelnl/actions/compare/v3.15.0...v3.15.1) (2023-09-15)


### :bug: Bug Fixes

* **pr-label-by-review:** fix protection type check ([#62](https://github.com/myparcelnl/actions/issues/62)) ([365f765](https://github.com/myparcelnl/actions/commit/365f765fba961d08dfcea2c28b50181304a99d58))

## [3.15.0](https://github.com/myparcelnl/actions/compare/v3.14.0...v3.15.0) (2023-09-08)


### :sparkles: New Features

* **pr-label-by-review:** allow checking rulesets instead of branch protections ([#60](https://github.com/myparcelnl/actions/issues/60)) ([8afb162](https://github.com/myparcelnl/actions/commit/8afb1625a4b49192004044eec73049b146f98033))

## [3.14.0](https://github.com/myparcelnl/actions/compare/v3.13.0...v3.14.0) (2023-08-08)


### :sparkles: New Features

* add toggle-label ([0e1c60b](https://github.com/myparcelnl/actions/commit/0e1c60b3083fe90432396bfc1cedafb3059226c3))

## [3.13.0](https://github.com/myparcelnl/actions/compare/v3.12.9...v3.13.0) (2023-08-08)


### :sparkles: New Features

* add composer-update ([1f13797](https://github.com/myparcelnl/actions/commit/1f1379765c723cbd2f8f6bc9961fa55a8c3dd5a9))

## [3.12.9](https://github.com/myparcelnl/actions/compare/v3.12.8...v3.12.9) (2023-08-02)


### :bug: Bug Fixes

* **composer-install:** fix vendor cache clashing with composer cache ([9683980](https://github.com/myparcelnl/actions/commit/9683980aaf10682937db30cb550bc577a424a457))

## [3.12.8](https://github.com/myparcelnl/actions/compare/v3.12.7...v3.12.8) (2023-07-31)


### :bug: Bug Fixes

* **pull-docker-image:** fix action exiting with code 1 ([c2e32f4](https://github.com/myparcelnl/actions/commit/c2e32f4168f2e50670d9c95886a211b8e60fe603))

## [3.12.7](https://github.com/myparcelnl/actions/compare/v3.12.6...v3.12.7) (2023-07-31)


### :bug: Bug Fixes

* **pull-docker-image:** fix syntax error ([199bc18](https://github.com/myparcelnl/actions/commit/199bc181d686c426fee2ff296da9f96f27f998fc))

## [3.12.6](https://github.com/myparcelnl/actions/compare/v3.12.5...v3.12.6) (2023-07-18)


### :zap: Performance Improvements

* **composer-install:** improve caching ([72d56b1](https://github.com/myparcelnl/actions/commit/72d56b17551bde98eb7a9d6c047e925e1b191246))

## [3.12.5](https://github.com/myparcelnl/actions/compare/v3.12.4...v3.12.5) (2023-07-18)


### :bug: Bug Fixes

* **composer-install:** use docker run instead of docker compose run ([b5e50e1](https://github.com/myparcelnl/actions/commit/b5e50e16aa9a32f0c3872cdb61a295182127b89c))

## [3.12.4](https://github.com/myparcelnl/actions/compare/v3.12.3...v3.12.4) (2023-07-18)


### :bug: Bug Fixes

* **composer-install:** use myparcelnl/php-xd image ([fd65806](https://github.com/myparcelnl/actions/commit/fd658066eacae801363d370a8ef17df2147b271d))

## [3.12.3](https://github.com/myparcelnl/actions/compare/v3.12.2...v3.12.3) (2023-07-18)


### :bug: Bug Fixes

* **pull-docker-image:** do not pull if image is already present ([cc720cc](https://github.com/myparcelnl/actions/commit/cc720cceb2c1b4d66c4abe02a20f64346bea966e))

## [3.12.2](https://github.com/myparcelnl/actions/compare/v3.12.1...v3.12.2) (2023-06-28)


### :bug: Bug Fixes

* **yarn-install:** improve performance ([eb665be](https://github.com/myparcelnl/actions/commit/eb665beae61256acd61ce241a6f86e97fd98a0ef))

## [3.12.1](https://github.com/myparcelnl/actions/compare/v3.12.0...v3.12.1) (2023-06-08)


### :bug: Bug Fixes

* **composer-install:** fix image argument not being passed on ([815358e](https://github.com/myparcelnl/actions/commit/815358eed6ff7ebe01840935c15fe5d72a62285c))

## [3.12.0](https://github.com/myparcelnl/actions/compare/v3.11.0...v3.12.0) (2023-06-02)


### :sparkles: New Features

* **composer-install:** add used image name as output ([16c1389](https://github.com/myparcelnl/actions/commit/16c1389a290876bf588e9949de81a7f6b94d93fb))

## [3.11.0](https://github.com/myparcelnl/actions/compare/v3.10.1...v3.11.0) (2023-06-02)


### :sparkles: New Features

* **composer-install:** use our own docker image rather than a 3rd party action ([e221147](https://github.com/myparcelnl/actions/commit/e221147c339da879cc94a52aaa8bb6d4c27eabac))

## [3.10.1](https://github.com/myparcelnl/actions/compare/v3.10.0...v3.10.1) (2023-06-01)


### :bug: Bug Fixes

* **setup-app-credentials:** pin use-app-token action to commit sha ([#54](https://github.com/myparcelnl/actions/issues/54)) ([d501431](https://github.com/myparcelnl/actions/commit/d501431db10f8f0302fa2bb7d3982c9b1d31c82a))

## [3.10.0](https://github.com/myparcelnl/actions/compare/v3.9.0...v3.10.0) (2023-05-23)


### :sparkles: New Features

* **rebase:** add continue-on-error input ([68809e5](https://github.com/myparcelnl/actions/commit/68809e52fed3308e651524eaa815a47fc8a844d3))

## [3.9.0](https://github.com/myparcelnl/actions/compare/v3.8.2...v3.9.0) (2023-04-20)


### :sparkles: New Features

* add pr-label-by-review ([bafc1e9](https://github.com/myparcelnl/actions/commit/bafc1e9535579543e836b21aed4daed2f5c3749f))

## [3.8.2](https://github.com/myparcelnl/actions/compare/v3.8.1...v3.8.2) (2023-04-20)


### :bug: Bug Fixes

* **get-github-token:** improve logging ([ad7b833](https://github.com/myparcelnl/actions/commit/ad7b833dec42f71ba0215704ff16eab851c54675))

## [3.8.1](https://github.com/myparcelnl/actions/compare/v3.8.0...v3.8.1) (2023-04-14)


### :bug: Bug Fixes

* **pr-assign-author:** refer to get-github-token via tag ([f62b51a](https://github.com/myparcelnl/actions/commit/f62b51ae300f679d114115bff0ce3159977d06cf))
* **pr-validate-title-conventional:** refer to get-github-token via tag ([a97e1ee](https://github.com/myparcelnl/actions/commit/a97e1eed43cdea19eb82c30e2d47d4cbbae73df7))

## [3.8.0](https://github.com/myparcelnl/actions/compare/v3.7.0...v3.8.0) (2023-04-13)


### :sparkles: New Features

* add get-github-token ([4da661d](https://github.com/myparcelnl/actions/commit/4da661d810f18d4ff8a3b68a5a633a7423ace865))
* add pr-assign-author ([b458c5c](https://github.com/myparcelnl/actions/commit/b458c5c1c08f586cd2adf7dbb97fe4be0227ff55))
* add pr-validate-title-conventional ([ad1b7a4](https://github.com/myparcelnl/actions/commit/ad1b7a4445ab6f14906cf86b8194f6408f003fb1))

## [3.7.0](https://github.com/myparcelnl/actions/compare/v3.6.2...v3.7.0) (2023-04-13)


### :sparkles: New Features

* **semantic-release:** add outputs with unprefixed version numbers ([d0be0ea](https://github.com/myparcelnl/actions/commit/d0be0ea3cddf0a7a950fb8ea1aa9e087dea88863))

## [3.6.2](https://github.com/myparcelnl/actions/compare/v3.6.1...v3.6.2) (2023-04-06)


### :bug: Bug Fixes

* **yarn-install:** add environment variables to speed up install ([c6f039f](https://github.com/myparcelnl/actions/commit/c6f039f33e3b0774a47d38ef35aa7ddce1517e04))

## [3.6.1](https://github.com/myparcelnl/actions/compare/v3.6.0...v3.6.1) (2023-02-28)


### :bug: Bug Fixes

* **pull-docker-image:** use proper cache key ([6a0508a](https://github.com/myparcelnl/actions/commit/6a0508aa51d54048987c69b77919619605db42a6))

## [3.6.0](https://github.com/myparcelnl/actions/compare/v3.5.1...v3.6.0) (2023-02-24)


### :sparkles: New Features

* add aws-setup and aws-s3-sync ([54133b7](https://github.com/myparcelnl/actions/commit/54133b744f05bc1c9d361b7856f1d9717edd68fa))

## [3.5.1](https://github.com/myparcelnl/actions/compare/v3.5.0...v3.5.1) (2023-02-21)


### :bug: Bug Fixes

* **bundlewatch:** don't pass config parameter when not needed ([7948d2b](https://github.com/myparcelnl/actions/commit/7948d2b8a522c1ae4fe92b3c02763122eaa8fba7))

## [3.5.0](https://github.com/myparcelnl/actions/compare/v3.4.2...v3.5.0) (2023-02-21)


### :sparkles: New Features

* add bundlewatch ([73eacaf](https://github.com/myparcelnl/actions/commit/73eacafd9be38bb543dbc53eb03c22bed183440d))

## [3.4.2](https://github.com/myparcelnl/actions/compare/v3.4.1...v3.4.2) (2023-02-20)


### :bug: Bug Fixes

* **yarn-install:** fix comparing yarn version ([d476103](https://github.com/myparcelnl/actions/commit/d476103bf14b4239ba94a5bb085d5d71ec568d30))

## [3.4.1](https://github.com/myparcelnl/actions/compare/v3.4.0...v3.4.1) (2023-01-25)


### :bug: Bug Fixes

* **yarn2-install:** properly call replacement action ([000d7a5](https://github.com/myparcelnl/actions/commit/000d7a5420efa714140585fbe466bc5152627ed0))

## [3.4.0](https://github.com/myparcelnl/actions/compare/v3.3.0...v3.4.0) (2023-01-25)


### :sparkles: New Features

* **yarn-install:** combine yarn2-install into yarn-install ([ee62fbd](https://github.com/myparcelnl/actions/commit/ee62fbdd80b7e92480de936b881fde67f18b9958))

## [3.3.0](https://github.com/myparcelnl/actions/compare/v3.2.3...v3.3.0) (2023-01-24)


### :sparkles: New Features

* **semantic-release:** improve release detection ([1c730aa](https://github.com/myparcelnl/actions/commit/1c730aaad54a28b4f4f43e05df51fa8f8df91871))

## [3.2.3](https://github.com/myparcelnl/actions/compare/v3.2.2...v3.2.3) (2023-01-24)


### :bug: Bug Fixes

* **rebase:** remove setup-git-credentials step ([e88f5be](https://github.com/myparcelnl/actions/commit/e88f5bebb86944c2b3579e1e884354cc57577373))

## [3.2.2](https://github.com/myparcelnl/actions/compare/v3.2.1...v3.2.2) (2023-01-20)


### :bug: Bug Fixes

* **pull-docker-image:** create unique filename for each image ([f086cb5](https://github.com/myparcelnl/actions/commit/f086cb5c1a301445ece02ad0840cd2f707c78a3e))

## [3.2.1](https://github.com/myparcelnl/actions/compare/v3.2.0...v3.2.1) (2023-01-19)


### :bug: Bug Fixes

* **pull-docker-image:** change default cache directory ([91bc969](https://github.com/myparcelnl/actions/commit/91bc969ad903f29c6b042dcfefb9e9b27f4d393b))

## [3.2.0](https://github.com/myparcelnl/actions/compare/v3.1.0...v3.2.0) (2023-01-19)


### :sparkles: New Features

* add pull-docker-image action ([53a28b8](https://github.com/myparcelnl/actions/commit/53a28b89868bc3da0bd50b0a583470192c252bfd))

## [3.1.0](https://github.com/myparcelnl/actions/compare/v3.0.4...v3.1.0) (2023-01-19)


### :sparkles: New Features

* **yarn2-install:** allow using no lockfile ([96ad91b](https://github.com/myparcelnl/actions/commit/96ad91bb21613bb5fb3da2324c3277240a6d2d8d))


### :bug: Bug Fixes

* **cache-nx:** cache based on nx.json ([6cc0848](https://github.com/myparcelnl/actions/commit/6cc0848935751574a3041df7853e5f98b3e81d47))
* **yarn2-install:** add some optimizations ([c5c6691](https://github.com/myparcelnl/actions/commit/c5c66910bbb5a597477486e67c9b53f898489418))

## [3.0.4](https://github.com/myparcelnl/actions/compare/v3.0.3...v3.0.4) (2023-01-16)


### :bug: Bug Fixes

* **semantic-release:** don't use setup-git-credentials anymore ([8cc3b6c](https://github.com/myparcelnl/actions/commit/8cc3b6c490f7cd1202ad2a6a0f697666a0b1491e))

## [3.0.3](https://github.com/myparcelnl/actions/compare/v3.0.2...v3.0.3) (2023-01-16)


### :bug: Bug Fixes

* **setup-git-credentials:** set git environment variables ([cc1d946](https://github.com/myparcelnl/actions/commit/cc1d946a6a1deff4f07530922cf24fdd065fda4b))

## [3.0.2](https://github.com/myparcelnl/actions/compare/v3.0.1...v3.0.2) (2023-01-16)


### :bug: Bug Fixes

* **credentials:** simplify git credentials action ([e466936](https://github.com/myparcelnl/actions/commit/e46693614ffa1113c63c01bf70a81b9f6a4c47ef))

## [3.0.1](https://github.com/myparcelnl/actions/compare/v3.0.0...v3.0.1) (2023-01-16)


### :bug: Bug Fixes

* **setup-git-credentials:** expose all app credentials as outputs ([6809088](https://github.com/myparcelnl/actions/commit/68090883f07580a4eb8b402d97896eac563b9c4b))

## [3.0.0](https://github.com/myparcelnl/actions/compare/v2.18.4...v3.0.0) (2023-01-16)


### ⚠ BREAKING CHANGES

* **deps:** update npm dependencies

### build

* **deps:** update npm dependencies ([4c30dc5](https://github.com/myparcelnl/actions/commit/4c30dc543917ebc37a3beab58b73140f2550fd89))


### :sparkles: New Features

* add setup-app-credentials ([de632b3](https://github.com/myparcelnl/actions/commit/de632b39e037656ecbe707e7f22728f3181b32fe))


### :bug: Bug Fixes

* **yarn2-install:** improve caching ([7ae2c99](https://github.com/myparcelnl/actions/commit/7ae2c993ca94e50e5f50214de215cd828b98c8dc))
* **yarn2-install:** remove working directory ([b39faee](https://github.com/myparcelnl/actions/commit/b39faee8e8cd6f6b9725d9252f8493467fe37dbf))

## [2.18.4](https://github.com/myparcelnl/actions/compare/v2.18.3...v2.18.4) (2022-11-24)


### :bug: Bug Fixes

* **cache-nx:** use correct lockfile hash ([2e0fae0](https://github.com/myparcelnl/actions/commit/2e0fae05bd56182756e649a6712308f432be1ab5))

## [2.18.3](https://github.com/myparcelnl/actions/compare/v2.18.2...v2.18.3) (2022-11-16)


### :bug: Bug Fixes

* **cache-nx:** fix syntax error ([3aed8f3](https://github.com/myparcelnl/actions/commit/3aed8f3d52e276828a18ac6cc8d1532b5e72f6b3))

## [2.18.2](https://github.com/myparcelnl/actions/compare/v2.18.1...v2.18.2) (2022-11-11)


### :bug: Bug Fixes

* **update-tags:** check tag on remote ([c6b2c36](https://github.com/myparcelnl/actions/commit/c6b2c365e8c86dc3318a6dccdfd0c7c9221d7fb6))

## [2.18.1](https://github.com/myparcelnl/actions/compare/v2.18.0...v2.18.1) (2022-11-11)


### :bug: Bug Fixes

* **update-tags:** update correct commit ([bb20c9d](https://github.com/myparcelnl/actions/commit/bb20c9d3a67ead6c9cdf127e067c9dccc27c099f))

## [2.18.0](https://github.com/myparcelnl/actions/compare/v2.17.0...v2.18.0) (2022-11-10)


### :sparkles: New Features

* **rebase:** add remote input ([fbfa896](https://github.com/myparcelnl/actions/commit/fbfa896f90a09956c20f020eb3fb31acd4929bf8))

## [2.17.0](https://github.com/myparcelnl/actions/compare/v2.16.0...v2.17.0) (2022-11-08)


### :sparkles: New Features

* **nx-cache:** add nx cache action ([6273559](https://github.com/myparcelnl/actions/commit/6273559ea906df4309a4bdda45a3d75d89792a55))

## [2.16.0](https://github.com/myparcelnl/actions/compare/v2.15.1...v2.16.0) (2022-10-24)


### :sparkles: New Features

* **yarn-install:** add yarn-args input ([4cb7e27](https://github.com/myparcelnl/actions/commit/4cb7e27ad458bb6f0017af0becfebfa8446d34e8))
* **yarn2-install:** add yarn-args input ([aa09627](https://github.com/myparcelnl/actions/commit/aa096272ed8b6d47db3dca831d88b860ba1c0b6f))

### [2.15.1](https://github.com/myparcelnl/actions/compare/v2.15.0...v2.15.1) (2022-10-17)


### :bug: Bug Fixes

* resolve set-output deprecation notices ([eb05847](https://github.com/myparcelnl/actions/commit/eb058478c5ce877830ae2b3e6f01e560ca803183))

## [2.15.0](https://github.com/myparcelnl/actions/compare/v2.14.0...v2.15.0) (2022-10-17)


### :sparkles: New Features

* **compare-branches:** add date to commits and add compare-url output ([e63e1e9](https://github.com/myparcelnl/actions/commit/e63e1e9105d4f85705a789b317d806261e009be9))

## [2.14.0](https://github.com/myparcelnl/actions/compare/v2.13.0...v2.14.0) (2022-09-30)


### :sparkles: New Features

* **semantic-release:** add write-summary option ([3b53fd0](https://github.com/myparcelnl/actions/commit/3b53fd0b54d015810ab0126f7e477f6425edb831))

## [2.13.0](https://github.com/myparcelnl/actions/compare/v2.12.5...v2.13.0) (2022-09-30)


### :sparkles: New Features

* **compare-branches:** add compare branches action ([5ae87a7](https://github.com/myparcelnl/actions/commit/5ae87a7125159797bbfcad30072fff46138dd8d2))

### [2.12.5](https://github.com/myparcelnl/actions/compare/v2.12.4...v2.12.5) (2022-09-19)


### :bug: Bug Fixes

* **semantic-release:** correctly set version output ([d9d2c1c](https://github.com/myparcelnl/actions/commit/d9d2c1cb9e7512df9bdda4ac8494231c59b1adfc))

### [2.12.4](https://github.com/myparcelnl/actions/compare/v2.12.3...v2.12.4) (2022-09-19)


### :bug: Bug Fixes

* **semantic-release:** set outputs properly ([e1f0a7d](https://github.com/myparcelnl/actions/commit/e1f0a7d3166e26ce913eccb9cccf89da2538526e))

### [2.12.3](https://github.com/myparcelnl/actions/compare/v2.12.2...v2.12.3) (2022-09-19)


### :bug: Bug Fixes

* **semantic-release:** get previous tag from remote instead of local ([0ea0a59](https://github.com/myparcelnl/actions/commit/0ea0a597c199aa7f4dc93f99ce132b906b7d8801))

### [2.12.2](https://github.com/myparcelnl/actions/compare/v2.12.1...v2.12.2) (2022-09-19)


### :bug: Bug Fixes

* **semantic-release:** run git fetch before getting tags ([68c5bd7](https://github.com/myparcelnl/actions/commit/68c5bd78441fc5320d44882032e24808cd69f1c5))

### [2.12.1](https://github.com/myparcelnl/actions/compare/v2.12.0...v2.12.1) (2022-09-19)


### :bug: Bug Fixes

* **semantic-release:** use correct name for previous-version ([77c755a](https://github.com/myparcelnl/actions/commit/77c755a5de023181f2b7499afa356abebba1a682))

## [2.12.0](https://github.com/myparcelnl/actions/compare/v2.11.2...v2.12.0) (2022-09-19)


### :sparkles: New Features

* **semantic-release:** add outputs for versions ([d1d20c8](https://github.com/myparcelnl/actions/commit/d1d20c8787fd7d4e0db519d8eca3e15d5df18aa5))

### [2.11.2](https://github.com/myparcelnl/actions/compare/v2.11.1...v2.11.2) (2022-08-11)


### :bug: Bug Fixes

* **npm:** use cache from setup-node ([a9e9349](https://github.com/myparcelnl/actions/commit/a9e93492c4a5aa03d93e25bf844421b3ba66f213))
* **pnpm:** use cache from setup-node ([8b08513](https://github.com/myparcelnl/actions/commit/8b08513f48365d260ddb09f6fc29cf77332dec5c))

### [2.11.1](https://github.com/myparcelnl/actions/compare/v2.11.0...v2.11.1) (2022-08-11)


### :bug: Bug Fixes

* **yarn2:** use cache from setup-node ([4a43c3c](https://github.com/myparcelnl/actions/commit/4a43c3c619d223cb47be1068ec61eb4fd617671e))
* **yarn:** use cache from setup-node ([362ffa8](https://github.com/myparcelnl/actions/commit/362ffa8e5af6069bce0872f0fa02f1be538be159))

## [2.11.0](https://github.com/myparcelnl/actions/compare/v2.10.3...v2.11.0) (2022-08-11)


### :sparkles: New Features

* **yarn2:** add yarn 2 install action ([d938245](https://github.com/myparcelnl/actions/commit/d938245cd4c1bf196a48f2834abf3c0d31244fa7))

### [2.10.3](https://github.com/myparcelnl/actions/compare/v2.10.2...v2.10.3) (2022-07-29)


### :bug: Bug Fixes

* make reusable semantic release workflow use correct git token ([6a5c50d](https://github.com/myparcelnl/actions/commit/6a5c50d58b03ad7edcb487aab1f8c0bb29ea7411))

### [2.10.2](https://github.com/myparcelnl/actions/compare/v2.10.1...v2.10.2) (2022-07-28)


### :bug: Bug Fixes

* **rebase:** separate force push into different step ([2f56c7f](https://github.com/myparcelnl/actions/commit/2f56c7f47c434d49f4e007d962760db2d1b07fed))

### [2.10.1](https://github.com/myparcelnl/actions/compare/v2.10.0...v2.10.1) (2022-07-28)


### :bug: Bug Fixes

* **rebase:** fix "no rebase in progress" error ([5553492](https://github.com/myparcelnl/actions/commit/55534927a8c68106af85c33ec9f302243ab43f25))

## [2.10.0](https://github.com/myparcelnl/actions/compare/v2.9.2...v2.10.0) (2022-07-26)


### :sparkles: New Features

* **pnpm-install:** add version and args inputs ([604590f](https://github.com/myparcelnl/actions/commit/604590ffdb3ff5a2dbda7ff75a01da15a77d5653))

### [2.9.2](https://github.com/myparcelnl/actions/compare/v2.9.1...v2.9.2) (2022-07-25)


### :bug: Bug Fixes

* **rebase:** fix quotes ([67177c1](https://github.com/myparcelnl/actions/commit/67177c1608b31da65a4f77103b1b9b3700ad9240))

### [2.9.1](https://github.com/myparcelnl/actions/compare/v2.9.0...v2.9.1) (2022-07-21)


### :bug: Bug Fixes

* **rebase:** don't push if rebase failed ([621e80e](https://github.com/myparcelnl/actions/commit/621e80e7f030ed8b546d3d3fcdfd91a6167c4522))

## [2.9.0](https://github.com/myparcelnl/actions/compare/v2.8.0...v2.9.0) (2022-07-21)


### :sparkles: New Features

* **rebase:** add force option ([a0fc4e4](https://github.com/myparcelnl/actions/commit/a0fc4e4c0051ae13f1ccbaccbd1faae9c36b740c))

## [2.8.0](https://github.com/myparcelnl/actions/compare/v2.7.0...v2.8.0) (2022-06-17)


### :sparkles: New Features

* **docker:** use gha cache ([88d924c](https://github.com/myparcelnl/actions/commit/88d924c59e27333cd2230cc7f9799d94b5b0bc2a))

## [2.7.0](https://github.com/myparcelnl/actions/compare/v2.6.5...v2.7.0) (2022-06-16)


### :sparkles: New Features

* add workflow for semantic release ([7af8d78](https://github.com/myparcelnl/actions/commit/7af8d787888dbedf55f75236c65020ea2db3d9e7))

### [2.6.5](https://github.com/myparcelnl/actions/compare/v2.6.4...v2.6.5) (2022-06-15)


### :bug: Bug Fixes

* **build-docker-image-reg:** load image and output correct name ([cbe0f97](https://github.com/myparcelnl/actions/commit/cbe0f97548b6b28dd55126cec93bb6c855523fce))

### [2.6.4](https://github.com/myparcelnl/actions/compare/v2.6.3...v2.6.4) (2022-06-15)


### :bug: Bug Fixes

* **update-tags:** update script ([ff09501](https://github.com/myparcelnl/actions/commit/ff09501a196faac562309e750351080e6bc8b579))

### [2.6.3](https://github.com/myparcelnl/actions/compare/v2.6.2...v2.6.3) (2022-06-15)


### :bug: Bug Fixes

* **update-tags:** fix token access ([0670bdb](https://github.com/myparcelnl/actions/commit/0670bdb54e461d7fffd4ca246e9b50923089bcb0))

### [2.6.2](https://github.com/myparcelnl/actions/compare/v2.6.1...v2.6.2) (2022-06-15)


### :bug: Bug Fixes

* **update-tags:** trim ref names ([06e6cbf](https://github.com/myparcelnl/actions/commit/06e6cbf4b1d2e8300ad85c2a436df375ec009eac))

### [2.6.1](https://github.com/myparcelnl/actions/compare/v2.6.0...v2.6.1) (2022-06-15)


### :bug: Bug Fixes

* **update-tags:** add missing file ([6a01e8a](https://github.com/myparcelnl/actions/commit/6a01e8a29a7e47e80a0c1bb92e35a682bd77640c))

## [2.6.0](https://github.com/myparcelnl/actions/compare/v2.5.0...v2.6.0) (2022-06-15)


### :sparkles: New Features

* **npm:** add pnpm install action ([fd9c1a2](https://github.com/myparcelnl/actions/commit/fd9c1a269173540d1e0ffb4fa2d068e26ab6cda2))

## [2.5.0](https://github.com/myparcelnl/actions/compare/v2.4.0...v2.5.0) (2022-06-15)


### :sparkles: New Features

* **docker:** add action to build using registry ([0ff99ff](https://github.com/myparcelnl/actions/commit/0ff99ff616fa0a6bef9bdfa53748f8f5ddfefcd2))

## [2.4.0](https://github.com/myparcelnl/actions/compare/v2.3.1...v2.4.0) (2022-06-02)


### :sparkles: New Features

* add update-tags action ([1acc215](https://github.com/myparcelnl/actions/commit/1acc215f2807ee8de4f7ba377938aef259dd69da))

### [2.3.1](https://github.com/myparcelnl/actions/compare/v2.3.0...v2.3.1) (2022-06-02)


### :bug: Bug Fixes

* **rebase:** use correct gh token ([2e89a5d](https://github.com/myparcelnl/actions/commit/2e89a5d32e14b6ed45bdf2527d593639387d6c84))
* **semantic-release:** use correct gh token ([ed30304](https://github.com/myparcelnl/actions/commit/ed303046e540008f11fb6d58379cbbb4e8b123ad))

## [2.3.0](https://github.com/myparcelnl/actions/compare/v2.2.0...v2.3.0) (2022-05-18)


### :sparkles: New Features

* add rebase action ([a653be5](https://github.com/myparcelnl/actions/commit/a653be51c4b423764b8b72a44a40463842f4ee72))


### :bug: Bug Fixes

* **rebase:** add github token input ([2802ff9](https://github.com/myparcelnl/actions/commit/2802ff92674837c2dc740d9f214fde05c7f3d32a))

## [2.2.0](https://github.com/myparcelnl/actions/compare/v2.1.0...v2.2.0) (2022-05-18)


### :sparkles: New Features

* add setup git credentials action ([e72610d](https://github.com/myparcelnl/actions/commit/e72610deaf47a4d1b319c79dea9d63c3a2c87368))

## [2.1.0](https://github.com/myparcelnl/actions/compare/v2.0.0...v2.1.0) (2022-05-18)


### :sparkles: New Features

* **composer-install:** improve speed ([9a8f314](https://github.com/myparcelnl/actions/commit/9a8f31452435410425bcfaa6801122a6971671c8))
* **npm-install:** improve speed ([fb19db3](https://github.com/myparcelnl/actions/commit/fb19db364e53faba606b0db2b98b1544cf9705dc))
* **yarn-install:** improve speed ([0572ddf](https://github.com/myparcelnl/actions/commit/0572ddfff9f6263caf57835a759d81dabf03a6bc))

## [2.0.0](https://github.com/myparcelnl/actions/compare/v1.0.0...v2.0.0) (2022-05-18)


### ⚠ BREAKING CHANGES

* use kebab-case in all inputs and outputs

### :bug: Bug Fixes

* use kebab-case in all inputs and outputs ([16f71ba](https://github.com/myparcelnl/actions/commit/16f71ba1ce6e1338889b5780fab295fea8f2763c))

## 1.0.0 (2022-05-18)


### :sparkles: New Features

* add code coverage action ([8896f48](https://github.com/myparcelnl/actions/commit/8896f48b6d1ade3220c5d62a388d9a41e2fe3627))
* add more actions ([8fcc6e5](https://github.com/myparcelnl/actions/commit/8fcc6e565ab0d9f90cb47a14afe6437f61f466f9))
* add semantic-release action ([940cf70](https://github.com/myparcelnl/actions/commit/940cf70d01032fe52e4e0ab881cf72f9781ff43b))
* **build-docker-image:** add action ([dedad05](https://github.com/myparcelnl/actions/commit/dedad0598fc67bf2d113e3be775d559f6e89c048))
* **docker:** add args as label to improve caching ([96803da](https://github.com/myparcelnl/actions/commit/96803da697a07488dc8dbbb3ec86556bf899834a))
* **docker:** add buildkit option ([f98c8ba](https://github.com/myparcelnl/actions/commit/f98c8bae3109caa3da079515d2f83be2d3bfb74f))
* **setup-node:** upgrade default node version to 16 (LTS) ([56cc31b](https://github.com/myparcelnl/actions/commit/56cc31bc0dfe67c8b3637ff17f52aae624894bed))
* **update-coverage:** update to v2 ([063129c](https://github.com/myparcelnl/actions/commit/063129c1de421efff663a3f8877e74f616e54f53))
* **yarn-install:** add node-version input ([24348a9](https://github.com/myparcelnl/actions/commit/24348a92fb8f8d643e4eb887712c886552dc4ee2))


### :bug: Bug Fixes

* **composer-install:** improve default flags ([52b7218](https://github.com/myparcelnl/actions/commit/52b721876ea0fb5fef368bc51dc60678bbe35d5b))
* **docker:** use image input ([c584a83](https://github.com/myparcelnl/actions/commit/c584a83ef082af6434fb0d5b20dc0a6279df5bf5))
* **semantic-release:** remove required input ([59808a8](https://github.com/myparcelnl/actions/commit/59808a8c3b074feda12dba6ff7432a955d64e3f4))

# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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

# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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

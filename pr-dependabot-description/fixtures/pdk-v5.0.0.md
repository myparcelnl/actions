## [5.0.0](https://github.com/myparcelnl/pdk/compare/v4.9.4...v5.0.0) (2026-10-08)

### ⚠ BREAKING CHANGES

* `DeliveryOptions::DELIVERY_TYPES_NAMES_IDS_MAP`, `DELIVERY_TYPES_V2_MAP`, `PACKAGE_TYPES_NAMES_IDS_MAP` and `PACKAGE_TYPES_V2_MAP` are removed. Use `ApiMapperService::forDeliveryType()` and `ApiMapperService::forPackageType()` from the SDK.
* `DeliveryOptions::DELIVERY_TYPE_*_ID`, `DELIVERY_TYPE_*_NAME` and `PACKAGE_TYPE_*_NAME` are removed. Use the SDK constants in `RefTypesDeliveryType`, `ShipmentDefsDeliveryOptionsDeliveryNameV2` and `ShipmentResponsesDeliveryOptionsPackageTypeV2`. `PACKAGE_TYPE_PACKAGE_SMALL_NAME` becomes `SMALL_PACKAGE`. The pickup name, `letter` and `envelope` have no constant: get them from `ApiMapperService`.
* `Carrier::CARRIER_*_LEGACY_NAME`, `Carrier::CARRIER_NAME_TO_LEGACY_MAP` and `Carrier::CARRIER_NAME_ID_MAP` are removed. Use the SDK constants in `ShipmentParametersCarrierName` for the legacy names, or `ApiMapperService::forCarrier()`.
* `Utils::convertToId()` and `Utils::convertToName()` are removed. Use the lookup methods of `ApiMapperService` from the SDK.
* The PDK requires SDK `11.0.0-beta.37` or later.

### :sparkles: New Features

* resolve carrier, package type and delivery type mappings through the SDK ([#543](https://github.com/myparcelnl/pdk/issues/543)) ([a167629](https://github.com/myparcelnl/pdk/commit/a167629e3c1bc54ca71da500469fd7f7a4e46a8d))
* `Carrier::isSupported()` accepts every SDK carrier with a v1 ID, so `DHL_FREIGHT` becomes available
* the `allowedShippingMethodsKeys` config entry is deprecated. Use it only to migrate plugin settings. A new package type does not appear in it: read the package types from `ApiMapperService` instead.

### :bug: Bug Fixes

* the delivery options v1 resource sends direct return as `returnOnFirstFailedDelivery` instead of `printReturnLabelAtDropOff`



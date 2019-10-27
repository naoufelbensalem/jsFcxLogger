/**
 * @ngdoc
 * @name jsFcxLogger
 *
 * @description
 * The service provides Logger object
 * From LISA description https://connections.ncredinburgh.com/Content/CJSA/Specifications/CJSA-Core-Specification-2_0_1.pdf
 * 
 * ## Usage
 * Import library from JS script 
 * */
var CJSA_SERVICE_NAME = 'ncr.cjsa.Logger';
var CJSA_SERVICE_VERSION = '1.0.0';

//Get Registry CJSA Object
export function getLoggerObject() {
	return Registry.get(CJSA_SERVICE_NAME,CJSA_SERVICE_VERSION);
}

//Get Registry CJSA services
export function getLoggerServices() {
	return Registry.get(CJSA_SERVICE_NAME).service;
}

//Get Registry Object with specific version
export function getSpecificVersionLoggerObject(version) {
	return Registry.get(CJSA_SERVICE_NAME,version);
}

/** Properties for Logger CJSA Services
 * capabilities
 * status
 * isDebugEnable
 * debug
 * error
 * exception
 * info
 * warning
 */

export function capabilities() {
	return getLoggerServices().capabilities;
}

export function status() {
	return getLoggerServices().status;
}

export function isDebugEnabled() {
	return getLoggerServices().isDebugEnabled;
}

export function debug(domain, operation, description) {
	//console.log(domain, operation, description);
	return getLoggerServices().debug(domain, operation, description);
}

export function error(domain, operation, description) {
	return getLoggerServices().error(domain, operation, description);
}

export function exception(domain, operation, description) {
	return getLoggerServices().exception(domain, operation, description);
}

export function info(domain, operation, description) {
	return getLoggerServices().info(domain, operation, description);
}

export function warning(domain, operation, description) {
	return getLoggerServices().warning(domain, operation, description);
}
import{isVKAPIMessage}from"../utils";import{REQUEST_PERFORM_ALLOWED_EVENT}from"../constants";export function isVKAPIRequestPerformAllowedMessage(e){return isVKAPIMessage(e)&&e.type===REQUEST_PERFORM_ALLOWED_EVENT}
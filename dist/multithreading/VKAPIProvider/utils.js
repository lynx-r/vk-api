import{isVKAPIMessage}from"../utils";import{PERFORM_REQUEST_EVENT}from"../constants";export function isVKAPIProcessRequestMessage(s){return isVKAPIMessage(s)&&s.type===PERFORM_REQUEST_EVENT}
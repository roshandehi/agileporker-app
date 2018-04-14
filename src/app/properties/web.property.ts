import { environment } from '../../environments/environment';

/* Base Urls */
//export const webSocketBaseUrl = environment.webSocketBaseUrl;

/* WebSocket info */
//export const webSocketUrl = 'http://localhost:8080/pos-wsock-server'; // TODO: Update the url once Elastic LB url is available

export const webSocketUrl = 'http://localhost:8080/gs-guide-websocket';

//export const webSocketUrl = webSocketBaseUrl;
export const stomp_heartbeat_in = 5000;
export const stomp_heartbeat_out = 10000;
export const stomp_reconnect_delay = 15000;

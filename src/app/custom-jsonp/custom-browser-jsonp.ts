import {BrowserJsonp} from "@angular/http/src/backends/browser_jsonp";



function getJsonpCallbackName(id: string): string {
  return `__custom__ng__jsonp${id}__`
}

export class CustomBrowserJsonp extends BrowserJsonp {
  requestCallback(id: string): string {
    return getJsonpCallbackName(id)
  }

  exposeConnection(id: string, connection: any): void {
    window[getJsonpCallbackName(id)] = connection.finished.bind(connection)
  }

  removeConnection(id: string): void {
    window[getJsonpCallbackName(id)] = null
    // or delete window[getJsonpCallbackName(id)]
  }
}

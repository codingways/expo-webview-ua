import ExpoModulesCore
import WebKit

public class ExpoWebviewUaModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoWebviewUa")

    AsyncFunction("getWebViewUserAgent") { () -> String in
      return try await withCheckedThrowingContinuation { continuation in
        DispatchQueue.main.async {
          let webView = WKWebView()
          webView.evaluateJavaScript("navigator.userAgent") { result, error in
            if let error = error {
              continuation.resume(throwing: error)
            } else if let ua = result as? String {
              continuation.resume(returning: ua)
            } else {
              continuation.resume(returning: "Unknown UserAgent")
            }
          }
        }
      }
    }
  }
}

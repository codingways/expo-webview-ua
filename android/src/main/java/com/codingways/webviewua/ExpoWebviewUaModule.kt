package com.codingways.webviewua

import android.os.Build
import android.webkit.WebSettings
import android.webkit.WebView
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoWebviewUaModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoWebviewUa")

    Function("getWebViewUserAgent") {
      val context = appContext.reactContext ?: throw Exception("No React context")
      return@Function if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
        WebSettings.getDefaultUserAgent(context)
      } else {
        WebView(context).settings.userAgentString
      }
    }
  }
}

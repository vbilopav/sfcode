﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Pgcode.Properties {
    using System;
    
    
    /// <summary>
    ///   A strongly-typed resource class, for looking up localized strings, etc.
    /// </summary>
    // This class was auto-generated by the StronglyTypedResourceBuilder
    // class via a tool like ResGen or Visual Studio.
    // To add or remove a member, edit your .ResX file then rerun ResGen
    // with the /str option, or rebuild your VS project.
    [global::System.CodeDom.Compiler.GeneratedCodeAttribute("System.Resources.Tools.StronglyTypedResourceBuilder", "16.0.0.0")]
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute()]
    [global::System.Runtime.CompilerServices.CompilerGeneratedAttribute()]
    internal class Resources {
        
        private static global::System.Resources.ResourceManager resourceMan;
        
        private static global::System.Globalization.CultureInfo resourceCulture;
        
        [global::System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1811:AvoidUncalledPrivateCode")]
        internal Resources() {
        }
        
        /// <summary>
        ///   Returns the cached ResourceManager instance used by this class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Resources.ResourceManager ResourceManager {
            get {
                if (object.ReferenceEquals(resourceMan, null)) {
                    global::System.Resources.ResourceManager temp = new global::System.Resources.ResourceManager("Pgcode.Properties.Resources", typeof(Resources).Assembly);
                    resourceMan = temp;
                }
                return resourceMan;
            }
        }
        
        /// <summary>
        ///   Overrides the current thread's CurrentUICulture property for all
        ///   resource lookups using this strongly typed resource class.
        /// </summary>
        [global::System.ComponentModel.EditorBrowsableAttribute(global::System.ComponentModel.EditorBrowsableState.Advanced)]
        internal static global::System.Globalization.CultureInfo Culture {
            get {
                return resourceCulture;
            }
            set {
                resourceCulture = value;
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to html{font-family:&quot;Segoe UI&quot;, sans-serif;font-size:12px;line-height:1.15}body{margin:0;color:#C5C5C5;background-color:#1E1E1E}#loading{position:absolute;left:0px;top:0px;width:100%;height:100%;justify-content:center;align-content:center;display:grid;font-size:10em;text-align:center}.out-of-viewport{position:absolute;top:-1000px;left:-1000px}.drop-target{background-color:#3b3e41 !important}@font-face{font-family:&apos;icons&apos;;src:url(&quot;../fonts/icons.woff2?57247429&quot;) format(&quot;woff2&quot;);font-weight:normal;font-style:nor [rest of string was truncated]&quot;;.
        /// </summary>
        internal static string _css_theme_dark_css {
            get {
                return ResourceManager.GetString("/css/theme-dark.css", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to html{font-family:&quot;Segoe UI&quot;, sans-serif;font-size:12px;line-height:1.15}body{margin:0;color:#1E1E1E;background-color:#C5C5C5}#loading{position:absolute;left:0px;top:0px;width:100%;height:100%;justify-content:center;align-content:center;display:grid;font-size:10em;text-align:center}.out-of-viewport{position:absolute;top:-1000px;left:-1000px}.drop-target{background-color:#3b3e41 !important}@font-face{font-family:&apos;icons&apos;;src:url(&quot;../fonts/icons.woff2?57247429&quot;) format(&quot;woff2&quot;);font-weight:normal;font-style:nor [rest of string was truncated]&quot;;.
        /// </summary>
        internal static string _css_theme_light_css {
            get {
                return ResourceManager.GetString("/css/theme-light.css", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized resource of type System.Byte[].
        /// </summary>
        internal static byte[] _favicon_ico {
            get {
                object obj = ResourceManager.GetObject("/favicon.ico", resourceCulture);
                return ((byte[])(obj));
            }
        }
        
        /// <summary>
        ///   Looks up a localized resource of type System.Byte[].
        /// </summary>
        internal static byte[] _fonts_icons_woff2 {
            get {
                object obj = ResourceManager.GetObject("/fonts/icons.woff2", resourceCulture);
                return ((byte[])(obj));
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to &lt;!DOCTYPE html&gt;
        ///&lt;head&gt;
        ///    &lt;meta charset=&quot;utf-8&quot;&gt;
        ///    &lt;title&gt;&lt;/title&gt;
        ///    &lt;base href=&quot;/&quot; /&gt;
        ///    &lt;link rel=&quot;icon&quot; type=&quot;image/x-icon&quot; href=&quot;favicon.ico?7415&quot; /&gt;
        ///    &lt;link rel=&quot;stylesheet&quot; id=&quot;theme&quot; type=&quot;text/css&quot; href=&quot;css/theme-dark.css?7415&quot; /&gt;
        ///    &lt;!-- &lt;link rel=&quot;manifest&quot; href=&quot;/manifest.json?7415&quot;&gt; --&gt;
        ///&lt;/head&gt;
        ///&lt;body&gt;
        ///    &lt;div id=&quot;loading&quot;&gt;
        ///        &amp;#8987;
        ///        &lt;script&gt;
        ///            //navigator.serviceWorker.register(&quot;service-worker.js?7415&quot;);
        ///            location.hash = &apos;7415&apos;;
        ///       [rest of string was truncated]&quot;;.
        /// </summary>
        internal static string _index_html {
            get {
                return ResourceManager.GetString("/index.html", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to /*build: 2020-05-07 13:58:12:491, version: 7415, copyright VB-Consulting*/
        ///(function(){&quot;use strict&quot;;const e=this;&quot;object&quot;==typeof global&amp;&amp;global;var t;!function(t){t.global=e;class i{constructor(){this._detected=!1,this._isWindows=!1,this._isWebWorker=!1}get isWindows(){return this._detect(),this._isWindows}get isWebWorker(){return this._detect(),this._isWebWorker}_detect(){this._detected||(this._detected=!0,this._isWindows=i._isWindows(),this._isWebWorker=&quot;function&quot;==typeof t.global.importScripts)}static _ [rest of string was truncated]&quot;;.
        /// </summary>
        internal static string _js_index_js {
            get {
                return ResourceManager.GetString("/js/index.js", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized resource of type System.Byte[].
        /// </summary>
        internal static byte[] _libs_monaco_editor_min_vs_base_browser_ui_codiconLabel_codicon_codicon_ttf {
            get {
                object obj = ResourceManager.GetObject("/libs/monaco-editor/min/vs/base/browser/ui/codiconLabel/codicon/codicon.ttf", resourceCulture);
                return ((byte[])(obj));
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to /*!-----------------------------------------------------------
        /// * Copyright (c) Microsoft Corporation. All rights reserved.
        /// * Version: 0.20.0(6363745c0a33c27b149b89342a7b96d354fb554c)
        /// * Released under the MIT license
        /// * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
        /// *-----------------------------------------------------------*/
        ///(function(){
        ///var e,t,n=[&quot;require&quot;,&quot;exports&quot;,&quot;vs/editor/common/core/position&quot;,&quot;vs/base/common/errors&quot;,&quot;vs/base/common/platform&quot;,&quot;vs/editor/common/core/range&quot;,&quot;vs/base/ [rest of string was truncated]&quot;;.
        /// </summary>
        internal static string _libs_monaco_editor_min_vs_base_worker_workerMain_js {
            get {
                return ResourceManager.GetString("/libs/monaco-editor/min/vs/base/worker/workerMain.js", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to /*!-----------------------------------------------------------------------------
        /// * Copyright (c) Microsoft Corporation. All rights reserved.
        /// * monaco-languages version: 1.10.0(1b4729c63bdb0d1e06d4e637e5c3977ddeb714dd)
        /// * Released under the MIT license
        /// * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
        /// *-----------------------------------------------------------------------------*/
        ///define(&quot;vs/basic-languages/pgsql/pgsql&quot;,[&quot;require&quot;,&quot;exports&quot;],(function(_,e){&quot;use strict&quot;;Object.defineP [rest of string was truncated]&quot;;.
        /// </summary>
        internal static string _libs_monaco_editor_min_vs_basic_languages_pgsql_pgsql_js {
            get {
                return ResourceManager.GetString("/libs/monaco-editor/min/vs/basic-languages/pgsql/pgsql.js", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to /*!-----------------------------------------------------------
        /// * Copyright (c) Microsoft Corporation. All rights reserved.
        /// * Version: 0.20.0(6363745c0a33c27b149b89342a7b96d354fb554c)
        /// * Released under the MIT license
        /// * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
        /// *-----------------------------------------------------------*/.monaco-action-bar{text-align:right;overflow:hidden;white-space:nowrap}.monaco-action-bar .actions-container{display:flex;margin:0 auto;padding:0;width:100%;justify-co [rest of string was truncated]&quot;;.
        /// </summary>
        internal static string _libs_monaco_editor_min_vs_editor_editor_main_css {
            get {
                return ResourceManager.GetString("/libs/monaco-editor/min/vs/editor/editor.main.css", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to /*!-----------------------------------------------------------
        /// * Copyright (c) Microsoft Corporation. All rights reserved.
        /// * Version: 0.20.0(6363745c0a33c27b149b89342a7b96d354fb554c)
        /// * Released under the MIT license
        /// * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
        /// *-----------------------------------------------------------*/
        ///(function(){
        ///var e,t,n=[&quot;require&quot;,&quot;exports&quot;,&quot;vs/base/common/lifecycle&quot;,&quot;vs/editor/common/core/range&quot;,&quot;vs/base/common/event&quot;,&quot;vs/base/common/strings&quot;,&quot;vs/base/browser/ [rest of string was truncated]&quot;;.
        /// </summary>
        internal static string _libs_monaco_editor_min_vs_editor_editor_main_js {
            get {
                return ResourceManager.GetString("/libs/monaco-editor/min/vs/editor/editor.main.js", resourceCulture);
            }
        }
        
        /// <summary>
        ///   Looks up a localized string similar to /*!-----------------------------------------------------------
        /// * Copyright (c) Microsoft Corporation. All rights reserved.
        /// * Version: 0.20.0(6363745c0a33c27b149b89342a7b96d354fb554c)
        /// * Released under the MIT license
        /// * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
        /// *-----------------------------------------------------------*/
        ///define(&quot;vs/editor/editor.main.nls&quot;,{&quot;vs/base/browser/ui/actionbar/actionbar&quot;:[&quot;{0} ({1})&quot;],&quot;vs/base/browser/ui/aria/aria&quot;:[&quot;{0} (occurred again)&quot;,&quot;{0} (occurred {1} t [rest of string was truncated]&quot;;.
        /// </summary>
        internal static string _libs_monaco_editor_min_vs_editor_editor_main_nls_js {
            get {
                return ResourceManager.GetString("/libs/monaco-editor/min/vs/editor/editor.main.nls.js", resourceCulture);
            }
        }
    }
}

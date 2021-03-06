
({
    version: "${(((1+Math.random())*0x10000)|0).toString(16).substring(1)}",
    silent: true,
    
    targetDir: "_build",
    sourceDir: "web",

    cssName: "css",
    libsName: "libs",
    fontsName: "fonts",

    outputDir: "${this.targetDir}/js",
    bundleFile: '${this.outputDir}/index.js',

    frameworkDir: "${this.sourceDir}/js",
    entryPointFile: '${this.frameworkDir}/index.js',
    loaderFile: "${this.frameworkDir}/loader/loader.js",
    frameworkModulePrefix: "js",
    
    bundleComment: 'build: ${this.timestamp}, hash: ${this.version}, copyright VB-Consulting',
    
    appDir: "${this.sourceDir}/app",
    appModulePrefix: "app",

    minifyDefault: true,
    minifyLoader: true,
    
    minifyHtml: {
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        collapseWhitespace: true
    }
})
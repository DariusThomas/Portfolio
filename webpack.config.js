var path = require("path");
var nodeExternals = require('webpack-node-externals');

 const frontConfig= {
    mode: process.env.NODE_ENV || 'development',
    entry: "./src/front/index.tsx",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    configFile: 'tsconfig.front.json'
                }
            },
            {
                test: /\.(s*)css$/,
                use: ["style-loader", "css-loader","sass-loader"]
            }, {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', ".css"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public/js")
    }
}

backConfig={
    mode: process.env.NODE_ENV || 'development',
    entry: './src/back/server.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFile: 'tsconfig.back.json'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist')
    },
    /*Review whats bellow */ 
    target: 'node',
    node: {
        __dirname: false
    },
    externals: [nodeExternals()]
};


module.exports=[frontConfig, backConfig]

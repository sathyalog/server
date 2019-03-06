module.exports = {
    // babel setup
    // tell webpack to run babel on everyfile it runs through
    module:{
        rules:[
            {
                test:/\.js?$/,
                loader:'babel-loader',
                exclude:'/node_modules/',
                options:{
                    presets:[
                        'react',
                        'stage-0',
                        ['env',{targets:{browsers:['last 2 versions']}}]
                    ]
                }
            }
        ]
    }
}
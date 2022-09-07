// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');

// module.exports = withPlugins(
//     [
//         [
//             optimizedImages,
//             {
//                 handleImages: ['jpeg', 'png', 'svg'],
//                 mozjpeg: {
//                     quality: 80
//                 },
//                 pngquant: {
//                     speed: 3,
//                     strip: true,
//                     verbose: true
//                 }
//             }
//         ]
//     ],

//     {
//         reactStrictMode: true,
//         trailingSlash: true,
//         images: {
//             disableStaticImages: true
//         },
//         webpack: (config) => {
//             config.module.rules = [
//                 ...config.module.rules,
//                 {
//                     test: /\.mp4$/,
//                     use: 'file-loader?name=videos/[name].[ext]'
//                 }
//             ];

//             return config;
//         }
//     }
// );

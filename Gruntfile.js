module.exports = function(grunt) {

    var githubDirPath = 'components/github/';
    var htmlDirPath = 'components/html/';
    var scgDirPath = 'components/scg/';
    var scsDirPath = 'components/scs/';
    var exampleDirPath = 'components/ui_example/';
    var helpSystemDirPath = 'components/help_system/';
    var defectsIndicatorDirPath = 'components/defects_indicator/';
    var measureConverterDirPath = 'components/measure_converter/';
    var concernsClassifierDirPath = 'components/concerns_classifier/';
    var intercheangableCarDirPath = 'components/intercheangable_car/';
    var modelSpecificationDirPath = 'components/model_specification/';
    var autopartSearchingDirPath = 'components/autopart_searching/';
    var autoTestDirPath = 'components/auto_test/';
    var webCoreCompPath = 'client/js/';
    var clientJsDirPath = 'client/static/components/js/';
    var clientCssDirPath = 'client/static/components/css/';
    var clientHtmlDirPath = 'client/static/components/html/';
    var clientImgDirPath = 'client/static/components/images/';

    grunt.initConfig({
        concat: {
            webcore: {
                src: [webCoreCompPath + 'Utils/sc_keynodes.js',
                      webCoreCompPath + 'Utils/utils.js',
                      webCoreCompPath + 'Utils/sc_helper.js',
                      webCoreCompPath + 'Utils/stringview.js',
                      webCoreCompPath + 'Utils/cache.js',
                      webCoreCompPath + 'Utils/sctp.js',
                      webCoreCompPath + 'Utils/fqueue.js',
                      webCoreCompPath + 'Utils/binary.js',
                      webCoreCompPath + 'Utils/triples.js',
                      webCoreCompPath + 'Utils/sc_link_helper.js',
                      webCoreCompPath + 'Core/namespace.js',
                      webCoreCompPath + 'Core/debug.js',
                      webCoreCompPath + 'Core/main.js',
                      webCoreCompPath + 'Core/server.js',
                      webCoreCompPath + 'Core/arguments.js',
                      webCoreCompPath + 'Core/componentsandbox.js',
                      webCoreCompPath + 'Core/translation.js',
                      webCoreCompPath + 'Core/componentmanger.js',
                      webCoreCompPath + 'Core/eventmanager.js',
                      webCoreCompPath + 'Ui/namespace.js',
                      webCoreCompPath + 'Ui/menu.js',
                      webCoreCompPath + 'Ui/langpanel.js',
                      webCoreCompPath + 'Ui/locker.js',
                      webCoreCompPath + 'Ui/core.js',
                      webCoreCompPath + 'Ui/searchpanel.js',
                      webCoreCompPath + 'Ui/KeyboardHandler.js',
                      webCoreCompPath + 'Ui/taskpanel.js',
                      webCoreCompPath + 'Ui/argumentspanel.js',
                      webCoreCompPath + 'Ui/windowmanager.js',
                      webCoreCompPath + 'Ui/OpenComponentHandler.js',
                      webCoreCompPath + 'Ui/userpanel.js',
                      webCoreCompPath + 'Ui/expertmodepanel.js',
                      webCoreCompPath + 'Ui/ExpertModeHandler.js',
                ],
                dest: clientJsDirPath + 'sc-web-core.js',
            },
            github: {
                src: [githubDirPath + 'src/*.js'],
                dest: githubDirPath + 'static/components/js/github/github.js'
            },
            html: {
                src: [htmlDirPath + 'src/*.js'],
                dest: htmlDirPath + 'static/components/js/html/html.js'
            },
            scg: {
                src: [
                      scgDirPath + '/src/gwf-file-creater.js',
                      scgDirPath + '/src/gwf-file-loader.js',
                      scgDirPath + '/src/gwf-model-objects.js',
                      scgDirPath + '/src/gwf-object-info-reader.js',
                      scgDirPath + '/src/scg-object-builder.js',
                      scgDirPath + '/src/scg.js',
                      scgDirPath + '/src/scg-debug.js',
                      scgDirPath + '/src/scg-math.js',
                      scgDirPath + '/src/scg-model-objects.js',
                      scgDirPath + '/src/scg-alphabet.js',
                      scgDirPath + '/src/scg-render.js',
                      scgDirPath + '/src/scg-scene.js',
                      scgDirPath + '/src/scg-layout.js',
                      scgDirPath + '/src/scg-tree.js',
                      scgDirPath + '/src/scg-struct.js',
                      scgDirPath + '/src/scg-object-creator.js',
                      scgDirPath + '/src/scg-component.js',
                      scgDirPath + '/src/listener/*.js',
                      scgDirPath + '/src/command/append-object.js',
                      scgDirPath + '/src/command/command-manager.js',
                      scgDirPath + '/src/command/create-node.js',
                      scgDirPath + '/src/command/create-edge.js',
                      scgDirPath + '/src/command/create-bus.js',
                      scgDirPath + '/src/command/create-contour.js',
                      scgDirPath + '/src/command/create-link.js',
                      scgDirPath + '/src/command/change-idtf.js',
                      scgDirPath + '/src/command/change-content.js',
                      scgDirPath + '/src/command/change-type.js',
                      scgDirPath + '/src/command/delete-objects.js',
                      scgDirPath + '/src/command/move-object.js',
                      scgDirPath + '/src/command/move-line-point.js',
                      scgDirPath + '/src/command/get-node-from-memory.js',
                      scgDirPath + '/src/command/wrapper-command.js'],
                dest: scgDirPath + 'static/components/js/scg/scg.js'
            },
            scs: {
                src: [scsDirPath + 'src/scs.js',
                      scsDirPath + 'src/scs-viewer.js',
                      scsDirPath + 'src/scs-output.js',
                      scsDirPath + 'src/scs-types.js',
                      scsDirPath + 'src/scn-output.js',
                      scsDirPath + 'src/scn-tree.js',
                      scsDirPath + 'src/scn-highlighter.js',
                      scsDirPath + 'src/scs-expert-mode.js',
                      scsDirPath + 'src/scs-component.js'],
                dest: scsDirPath + 'static/components/js/scs/scs.js'
            },
            example: {
                src: [exampleDirPath + 'src/example-common.js',
                    exampleDirPath + 'src/example-component.js',
                    exampleDirPath + 'src/example-paintPanel.js'
                ],
                dest: exampleDirPath + 'static/components/js/ui_example/ui_example.js'
            },
            helpSystem: {
                src: [helpSystemDirPath + 'src/example-common.js',
                    helpSystemDirPath + 'src/example-component.js',
                    helpSystemDirPath + 'src/example-paintPanel.js'
                ],
                dest: helpSystemDirPath + 'static/components/js/help_system/help_system.js'
            },
            defectsIndicator: {
                src: [defectsIndicatorDirPath + 'src/example-common.js',
                    defectsIndicatorDirPath + 'src/example-component.js',
                    defectsIndicatorDirPath + 'src/example-paintPanel.js'
                ],
                dest: defectsIndicatorDirPath + 'static/components/js/defects_indicator/defects_indicator.js'
            },
            measureConverter: {
                src: [measureConverterDirPath + 'src/example-common.js',
                    measureConverterDirPath + 'src/example-component.js',
                    measureConverterDirPath + 'src/example-paintPanel.js'
                ],
                dest: measureConverterDirPath + 'static/components/js/measure_converter/measure_converter.js'
            },
            concernsClassifier: {
                src: [concernsClassifierDirPath + 'src/example-common.js',
                    concernsClassifierDirPath + 'src/example-component.js',
                    concernsClassifierDirPath + 'src/example-paintPanel.js'
                ],
                dest: concernsClassifierDirPath + 'static/components/js/concerns_classifier/concerns_classifier.js'
            },
            intercheangableCar: {
                src: [intercheangableCarDirPath + 'src/example-common.js',
                    intercheangableCarDirPath + 'src/example-component.js',
                    intercheangableCarDirPath + 'src/example-paintPanel.js'
                ],
                dest: intercheangableCarDirPath + 'static/components/js/intercheangable_car/intercheangable_car.js'
            },
            modelSpecification: {
                src: [modelSpecificationDirPath + 'src/example-common.js',
                    modelSpecificationDirPath + 'src/example-component.js',
                    modelSpecificationDirPath + 'src/example-paintPanel.js'
                ],
                dest: modelSpecificationDirPath + 'static/components/js/model_specification/model_specification.js'
            },
            autopartSearching: {
                src: [autopartSearchingDirPath + 'src/example-common.js',
                    autopartSearchingDirPath + 'src/example-component.js',
                    autopartSearchingDirPath + 'src/example-paintPanel.js'
                ],
                dest: autopartSearchingDirPath + 'static/components/js/autopart_searching/autopart_searching.js'
            },
            autoTest: {
                src: [autoTestDirPath + 'src/example-common.js',
                    autoTestDirPath + 'src/example-component.js',
                    autoTestDirPath + 'src/example-paintPanel.js'
                ],
                dest: autoTestDirPath + 'static/components/js/auto_test/auto_test.js'
            }
        },
        copy: {
            githubJs: {
                cwd: githubDirPath + 'static/components/js/github/',
                src: 'github.js',
                dest: clientJsDirPath + 'github/',
                expand: true,
                flatten: true
            },
            htmlJs: {
                cwd: htmlDirPath + 'static/components/js/html/',
                src: 'html.js',
                dest: clientJsDirPath + 'html/',
                expand: true,
                flatten: true
            },
            scgJs: {
                cwd: scgDirPath + 'static/components/js/scg/',
                src: 'scg.js',
                dest: clientJsDirPath + 'scg/',
                expand: true,
                flatten: true
            },
            scsJs: {
                cwd: scsDirPath + 'static/components/js/scs/',
                src: 'scs.js',
                dest: clientJsDirPath + 'scs/',
                expand: true,
                flatten: true
            },
            uiExampleJs: {
                cwd: exampleDirPath + 'static/components/js/ui_example/',
                src: 'ui_example.js',
                dest: clientJsDirPath + 'ui_example/',
                expand: true,
                flatten: true
            },
            helpSystemJs: {
                cwd: helpSystemDirPath + 'static/components/js/help_system/',
                src: 'help_system.js',
                dest: clientJsDirPath + 'help_system/',
                expand: true,
                flatten: true
            },
            defectsIndicatorJs: {
                cwd: defectsIndicatorDirPath + 'static/components/js/defects_indicator/',
                src: 'defects_indicator.js',
                dest: clientJsDirPath + 'defects_indicator/',
                expand: true,
                flatten: true
            },
            measureConverterJs: {
                cwd: measureConverterDirPath + 'static/components/js/measure_converter/',
                src: 'measure_converter.js',
                dest: clientJsDirPath + 'measure_converter/',
                expand: true,
                flatten: true
            },
            concernsClassifierJs: {
                cwd: concernsClassifierDirPath + 'static/components/js/concerns_classifier/',
                src: 'concerns_classifier.js',
                dest: clientJsDirPath + 'concerns_classifier/',
                expand: true,
                flatten: true
            },
            intercheangableCarJs: {
                cwd: intercheangableCarDirPath + 'static/components/js/intercheangable_car/',
                src: 'intercheangable_car.js',
                dest: clientJsDirPath + 'intercheangable_car/',
                expand: true,
                flatten: true
            },
            modelSpecificationJs: {
                cwd: modelSpecificationDirPath + 'static/components/js/model_specification/',
                src: 'model_specification.js',
                dest: clientJsDirPath + 'model_specification/',
                expand: true,
                flatten: true
            },
            autopartSearchingJs: {
                cwd: autopartSearchingDirPath + 'static/components/js/autopart_searching/',
                src: 'autopart_searching.js',
                dest: clientJsDirPath + 'autopart_searching/',
                expand: true,
                flatten: true
            },
            autoTestJs: {
                cwd: autoTestDirPath + 'static/components/js/auto_test/',
                src: 'auto_test.js',
                dest: clientJsDirPath + 'auto_test/',
                expand: true,
                flatten: true
            },
            githubCss: {
                cwd: githubDirPath + 'static/components/css/',
                src: 'github.css',
                dest: clientCssDirPath,
                expand: true,
                flatten: true
            },
            htmlCss: {
                cwd: htmlDirPath + 'static/components/css/',
                src: 'html.css',
                dest: clientCssDirPath,
                expand: true,
                flatten: true
            },
            scgCss: {
                cwd: scgDirPath + 'static/components/css/',
                src: 'scg.css',
                dest: clientCssDirPath,
                expand: true,
                flatten: true
            },
            scsCss: {
                cwd: scsDirPath + 'static/components/css/',
                src: 'scs.css',
                dest: clientCssDirPath,
                expand: true,
                flatten: true
            },
            measureConverterCss: {
                cwd: measureConverterDirPath + 'static/components/css/',
                src: 'measure_converter.css',
                dest: clientCssDirPath,
                expand: true,
                flatten: true
            },
            scgHtml: {
                cwd: scgDirPath + 'static/components/html/',
                src: ['**/*.html'],
                dest: clientHtmlDirPath,
                expand: true,
                flatten: true
            },
            autopartSearchingHtml: {
                cwd: autopartSearchingDirPath + 'static/components/html/',
                src: ['**/*.html'],
                dest: clientHtmlDirPath + "autopart_searching/",
                expand: true,
                flatten: true
            },
            htmlImg: {
                cwd: htmlDirPath + 'static/components/images/html/',
                src: '**/*.png',
                dest: clientImgDirPath + 'html/',
                expand: true,
                flatten: true
            },
            scgImg: {
                cwd: scgDirPath + 'static/components/images/scg/',
                src: '*.png',
                dest: clientImgDirPath + 'scg/',
                expand: true,
                flatten: true
            },
            scgImgAlphabet: {
                cwd: scgDirPath + 'static/components/images/scg/alphabet/',
                src: '*.png',
                dest: clientImgDirPath + 'scg/alphabet',
                expand: true,
                flatten: true
            },
            concernsClassifierImg: {
                cwd: concernsClassifierDirPath + 'static/components/images/',
                src: ['*.png',
                    '*.jpg'
                ],
                dest: clientImgDirPath,
                expand: true,
                flatten: true
            }
        },
        watch: {
            core: {
                files: webCoreCompPath + '**',
                tasks: ['concat:webcore'],
            },
            githubJs: {
                files: githubDirPath + 'src/**',
                tasks: ['concat:github', 'copy:githubJs'],
            },
            htmlJs: {
                files: htmlDirPath + 'src/**',
                tasks: ['concat:html', 'copy:htmlJs'],
            },
            scgJs: {
                files: scgDirPath + 'src/**',
                tasks: ['concat:scg', 'copy:scgJs'],
            },
            scsJs: {
                files: scsDirPath + 'src/**',
                tasks: ['concat:scs', 'copy:scsJs'],
            },
            uiExampleJs: {
                files: exampleDirPath + 'src/**',
                tasks: ['concat:example', 'copy:uiExampleJs'],
            },
            helpSystemJs: {
                files: helpSystemDirPath + 'src/**',
                tasks: ['concat:helpSystem', 'copy:helpSystemJs'],
            },
            defectsIndicatorJs: {
                files: defectsIndicatorDirPath + 'src/**',
                tasks: ['concat:defectsIndicator', 'copy:defectsIndicatorJs'],
            },
            measureConverterJs: {
                files: measureConverterDirPath + 'src/**',
                tasks: ['concat:measureConverter', 'copy:measureConverterJs'],
            },
            concernsClassifierJs: {
                files: concernsClassifierDirPath + 'src/**',
                tasks: ['concat:concernsClassifier', 'copy:concernsClassifierJs'],
            },
            intercheangableCarJs: {
                files: intercheangableCarDirPath + 'src/**',
                tasks: ['concat:intercheangableCar', 'copy:intercheangableCarJs'],
            },
            modelSpecificationJs: {
                files: modelSpecificationDirPath + 'src/**',
                tasks: ['concat:modelSpecification', 'copy:modelSpecificationJs'],
            },
            autopartSearchingJs: {
                files: autopartSearchingDirPath + 'src/**',
                tasks: ['concat:autopartSearching', 'copy:autopartSearchingJs'],
            },
            autoTestJs: {
                files: autoTestDirPath + 'src/**',
                tasks: ['concat:autoTest', 'copy:autoTestJs'],
            },
            githubCss: {
                files: githubDirPath + 'static/components/css/**',
                tasks: ['copy:githubCss'],
            },
            htmlCss: {
                files: htmlDirPath + 'static/components/css/**',
                tasks: ['copy:htmlCss'],
            },
            scgCss: {
                files: scgDirPath + 'static/components/css/**',
                tasks: ['copy:scgCss'],
            },
            scsCss: {
                files: scsDirPath + 'static/components/css/**',
                tasks: ['copy:scsCss'],
            },
            measureConverterCss: {
                files: measureConverterDirPath + 'static/components/css/**',
                tasks: ['copy:measureConverterCss'],
            },
            scgHtml: {
                files: [scgDirPath + 'static/components/html/**'],
                tasks: ['copy:scgHtml'],
            },
            autopartSearchingHtml: {
                files: [autopartSearchingDirPath + 'static/components/html/**'],
                tasks: ['copy:autopartSearchingHtml'],
            },
            htmlImg: {
                files: [htmlDirPath + 'static/components/images/html/**',],
                tasks: ['copy:htmlImg'],
            },
            scgImg: {
                files: [scgDirPath + 'static/components/images/scg/**'],
                tasks: ['copy:scgImg', 'copy:scgImgAlphabet'],
            },
            concernsClassifierImg: {
                files: [concernsClassifierDirPath + 'static/components/images/**'],
                tasks: ['copy:concernsClassifierImg'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'copy', 'watch']);
    grunt.registerTask('build', ['concat', 'copy']);

};

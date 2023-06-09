#!/bin/bash

if [[ "$FRAMEWORK" == "react-native" && "$BUILD_TOOL" == 'cli' ]]; then
    AWS_EXPORTS_FILE="templates/template-react-native-aws-exports.js"
else
    AWS_EXPORTS_FILE="templates/template-aws-exports.js"
fi

echo "cd build-system-tests"
cd build-system-tests
if [ "$BUILD_TOOL" == 'cra' ]; then
    echo "cp $AWS_EXPORTS_FILE mega-apps/${MEGA_APP_NAME}/src/aws-exports.js"
    cp $AWS_EXPORTS_FILE mega-apps/${MEGA_APP_NAME}/src/aws-exports.js
    if [ "$LANGUAGE" == 'js' ]; then
        echo "cp templates/components/react/cra/App.js mega-apps/${MEGA_APP_NAME}/src/App.js"
        cp templates/components/react/cra/App.js mega-apps/${MEGA_APP_NAME}/src/App.js
    else
        echo "cp templates/components/react/cra/App.js mega-apps/${MEGA_APP_NAME}/src/App.tsx"
        cp templates/components/react/cra/App.js mega-apps/${MEGA_APP_NAME}/src/App.tsx
        if [ "$FRAMEWORK_VERSION" == '16' ]; then
            # We have to customize the index.tsx file for React 16 because the render API changed since React 18.
            # See more: https://legacy.reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
            echo "cp templates/components/react/cra/index-react-${FRAMEWORK_VERSION}.js mega-apps/${MEGA_APP_NAME}/src/index.tsx"
            cp templates/components/react/cra/index-react-${FRAMEWORK_VERSION}.js mega-apps/${MEGA_APP_NAME}/src/index.tsx
        fi
    fi
fi

if [ "$BUILD_TOOL" == 'next' ]; then
    echo "mkdir mega-apps/${MEGA_APP_NAME}/data"
    mkdir mega-apps/${MEGA_APP_NAME}/data
    echo "cp $AWS_EXPORTS_FILE mega-apps/${MEGA_APP_NAME}/data/aws-exports.js"
    cp $AWS_EXPORTS_FILE mega-apps/${MEGA_APP_NAME}/data/aws-exports.js
    echo "cp templates/components/react/next/App.js mega-apps/${MEGA_APP_NAME}/pages/index.tsx"
    cp templates/components/react/next/App.js mega-apps/${MEGA_APP_NAME}/pages/index.tsx
    if [ "$BUILD_TOOL_VERSION" == '11' ]; then
        # We have to customize the package.json and tsconfig.json for Next.js 11,
        # because create-next-app only creates the app with the latest version
        echo "cp templates/components/react/next/template-package-${BUILD_TOOL_VERSION}.json mega-apps/${MEGA_APP_NAME}/package.json"
        cp templates/components/react/next/template-package-${BUILD_TOOL_VERSION}.json mega-apps/${MEGA_APP_NAME}/package.json
        echo "cp templates/components/react/next/template-tsconfig-${BUILD_TOOL_VERSION}.json mega-apps/${MEGA_APP_NAME}/tsconfig.json"
        cp templates/components/react/next/template-tsconfig-${BUILD_TOOL_VERSION}.json mega-apps/${MEGA_APP_NAME}/tsconfig.json
    fi
fi

if [[ "$FRAMEWORK" == 'react' && "$BUILD_TOOL" == 'vite' ]]; then
    echo "cp $AWS_EXPORTS_FILE mega-apps/${MEGA_APP_NAME}/src/aws-exports.js"
    cp $AWS_EXPORTS_FILE mega-apps/${MEGA_APP_NAME}/src/aws-exports.js
    echo "cp templates/components/react/vite/App.tsx mega-apps/${MEGA_APP_NAME}/src/App.tsx"
    cp templates/components/react/vite/App.tsx mega-apps/${MEGA_APP_NAME}/src/App.tsx

    # See troubleshooting:
    # https://ui.docs.amplify.aws/react/getting-started/troubleshooting#vite
    echo "cp templates/components/react/vite/index.html mega-apps/${MEGA_APP_NAME}/index.html"
    cp templates/components/react/vite/index.html mega-apps/${MEGA_APP_NAME}/index.html
    echo "cp templates/components/react/vite/template-tsconfig-vite-${BUILD_TOOL_VERSION}.json mega-apps/${MEGA_APP_NAME}/tsconfig.json"
    cp templates/components/react/vite/template-tsconfig-vite-${BUILD_TOOL_VERSION}.json mega-apps/${MEGA_APP_NAME}/tsconfig.json
    echo "cp templates/components/react/vite/vite.config.ts mega-apps/${MEGA_APP_NAME}/vite.config.ts"
    cp templates/components/react/vite/vite.config.ts mega-apps/${MEGA_APP_NAME}/vite.config.ts
fi

if [[ "$FRAMEWORK" == 'angular' ]]; then
    # The following change is to test build. If to work on the brower, we also need to change polyfills.
    # See more: https://ui.docs.amplify.aws/angular/getting-started/troubleshooting
    if [ "$BUILD_TOOL" == 'angular-app' ]; then
        echo "cp templates/components/angular/app.component.ts mega-apps/${MEGA_APP_NAME}/src/app/app.component.ts"
        cp templates/components/angular/app.component.ts mega-apps/${MEGA_APP_NAME}/src/app/app.component.ts
        echo "cp templates/components/angular/app.module.ts mega-apps/${MEGA_APP_NAME}/src/app/app.module.ts"
        cp templates/components/angular/app.module.ts mega-apps/${MEGA_APP_NAME}/src/app/app.module.ts
    elif [ "$BUILD_TOOL" == 'angular-lib' ]; then
        echo "cp templates/components/angular/lib/app.component.ts mega-apps/${MEGA_APP_NAME}/src/app/app.component.ts"
        cp templates/components/angular/lib/app.component.ts mega-apps/${MEGA_APP_NAME}/src/app/app.component.ts
        echo "cp templates/components/angular/lib/app.module.ts mega-apps/${MEGA_APP_NAME}/src/app/app.module.ts"
        cp templates/components/angular/lib/app.module.ts mega-apps/${MEGA_APP_NAME}/src/app/app.module.ts
        echo "cp templates/components/angular/lib/my-amplify-ui-lib.component.ts mega-apps/${MEGA_APP_NAME}/projects/my-amplify-ui-lib/src/lib/my-amplify-ui-lib.component.ts"
        cp templates/components/angular/lib/my-amplify-ui-lib.component.ts mega-apps/${MEGA_APP_NAME}/projects/my-amplify-ui-lib/src/lib/my-amplify-ui-lib.component.ts
        echo "cp templates/components/angular/lib/my-amplify-ui-lib.module.ts mega-apps/${MEGA_APP_NAME}/projects/my-amplify-ui-lib/src/lib/my-amplify-ui-lib.module.ts"
        cp templates/components/angular/lib/my-amplify-ui-lib.module.ts mega-apps/${MEGA_APP_NAME}/projects/my-amplify-ui-lib/src/lib/my-amplify-ui-lib.module.ts
    fi
fi

if [[ "$FRAMEWORK" == 'vue' ]]; then
    echo "cp templates/components/vue/App.vue mega-apps/${MEGA_APP_NAME}/src/App.vue"
    cp templates/components/vue/App.vue mega-apps/${MEGA_APP_NAME}/src/App.vue
    echo "cp $AWS_EXPORTS_FILE mega-apps/${MEGA_APP_NAME}/src/aws-exports.js"
    cp $AWS_EXPORTS_FILE mega-apps/${MEGA_APP_NAME}/src/aws-exports.js

    # remove comments from JSON files because `json` package can't process comments
    echo "mv mega-apps/${MEGA_APP_NAME}/tsconfig.json mega-apps/${MEGA_APP_NAME}/tsconfig-original.json"
    mv mega-apps/${MEGA_APP_NAME}/tsconfig.json mega-apps/${MEGA_APP_NAME}/tsconfig-original.json
    echo "npx strip-json-comments mega-apps/${MEGA_APP_NAME}/tsconfig-original.json >mega-apps/${MEGA_APP_NAME}/tsconfig.json"
    npx strip-json-comments mega-apps/${MEGA_APP_NAME}/tsconfig-original.json >mega-apps/${MEGA_APP_NAME}/tsconfig.json

    # Add `allowJs: true` to tsconfig for aws-exports.js
    echo "npx json -I -f mega-apps/${MEGA_APP_NAME}/tsconfig.json -e \"this.compilerOptions.allowJs=true\""
    npx json -I -f mega-apps/${MEGA_APP_NAME}/tsconfig.json -e "this.compilerOptions.allowJs=true"

    # See Troubleshooting: https://ui.docs.amplify.aws/vue/getting-started/troubleshooting
    if [[ "$BUILD_TOOL" == 'vite' ]]; then
        echo "cp templates/components/vue/vite/index.html mega-apps/${MEGA_APP_NAME}/index.html"
        cp templates/components/vue/vite/index.html mega-apps/${MEGA_APP_NAME}/index.html
        echo "cp templates/components/vue/vite/vite.config.ts mega-apps/${MEGA_APP_NAME}/vite.config.ts"
        cp templates/components/vue/vite/vite.config.ts mega-apps/${MEGA_APP_NAME}/vite.config.ts
    fi

    if [[ "$BUILD_TOOL" == 'nuxt' ]]; then
        echo "cp templates/components/vue/nuxt/* mega-apps/${MEGA_APP_NAME}/"
        cp templates/components/vue/nuxt/* mega-apps/${MEGA_APP_NAME}/
    fi
fi

if [[ "$FRAMEWORK" == "react-native" ]]; then
    echo "cp templates/components/react-native/cli/App.tsx mega-apps/${MEGA_APP_NAME}/App.tsx"
    cp templates/components/react-native/cli/App.tsx mega-apps/${MEGA_APP_NAME}/App.tsx
    if [[ "$BUILD_TOOL" == 'cli' ]]; then
        # React Native CLI has to use the template-aws-exports.js, which is an empty aws-exports file
        # Because we need to see the "'AuthError -" to know the errors are successfully logged.
        # Because React Native CLI doesn't log error in the initial terminal. We have to use react-native-log-ios or log-android to log errors.
        echo "cp $AWS_EXPORTS_FILE mega-apps/${MEGA_APP_NAME}/aws-exports.js"
        cp $AWS_EXPORTS_FILE mega-apps/${MEGA_APP_NAME}/aws-exports.js
    elif [[ "$BUILD_TOOL" == 'expo' ]]; then
        echo "cp $AWS_EXPORTS_FILE mega-apps/${MEGA_APP_NAME}/aws-exports.js"
        cp $AWS_EXPORTS_FILE mega-apps/${MEGA_APP_NAME}/aws-exports.js
    fi
fi

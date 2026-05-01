# Persistencia App

Checklist de referencia para preparar y publicar esta app en Google Play y App Store usando Expo / React Native.

Fecha de verificacion de referencias oficiales: `2026-04-30`.

## Objetivo

Este README sirve para:

- validar requisitos tecnicos antes de generar builds;
- revisar politicas de privacidad, permisos y contenido;
- preparar metadatos para Google Play y App Store;
- usar Expo EAS para build y envio a tiendas;
- llevar control de pendientes reales de este proyecto.

## Estado actual del proyecto

Configurado actualmente en [app.json](/Users/quexitoo/Documents/DAVINCI/MULTIPLATAFORMA-2026/Proyecto/TALLER/Taller1/persistencia-app/app.json):

- `expo.name`, `expo.slug` y `expo.version`
- icono principal y splash screen
- permiso de camara para Android
- `NSCameraUsageDescription` para iOS
- `ios.supportsTablet: true`

Pendiente antes de publicar:

- definir `ios.bundleIdentifier`
- definir `ios.buildNumber`
- definir `android.package`
- definir `android.versionCode`
- crear `eas.json`
- preparar politica de privacidad publicada en URL real
- crear screenshots finales para stores
- validar textos, nombre comercial y descripcion corta/larga
- probar en iPhone con notch, iPad y Android pequeno/grande
- confirmar Data Safety de Google Play y App Privacy de Apple

## Checklist general

- [ ] El nombre final de la app esta definido
- [ ] La version publica en `expo.version` esta correcta
- [ ] Cada build incrementa `ios.buildNumber` y `android.versionCode`
- [ ] La app funciona sin errores en dispositivos reales
- [ ] No hay texto placeholder, datos de prueba visibles ni rutas rotas
- [ ] Los permisos solicitados coinciden con funciones reales de la app
- [ ] La politica de privacidad existe en una URL publica y activa
- [ ] Los iconos, splash, screenshots y metadatos finales ya estan listos
- [ ] Se validaron formularios, navegacion, permisos y estado offline basico
- [ ] Se probo instalacion limpia y actualizacion de version

## Android

### Checklist para Google Play

- [ ] Crear cuenta en Google Play Console
- [ ] Crear la app en Play Console
- [ ] Definir `android.package` unico
- [ ] Generar AAB firmado
- [ ] Completar ficha de tienda
- [ ] Completar seccion `Data safety`
- [ ] Declarar permisos sensibles solo si son necesarios
- [ ] Cargar politica de privacidad
- [ ] Revisar clasificacion de contenido y publico objetivo si aplica
- [ ] Verificar cumplimiento de politicas de Google Play
- [ ] Subir build a testing interno/cerrado antes de produccion

### Puntos tecnicos importantes

- Google Play exige target API actualizado. Segun la documentacion verificada, las apps existentes de mobile y Android Auto deben apuntar al menos a Android 14 (`API level 34`) desde el `31 de agosto de 2025`.
- Si la app usa permisos sensibles o datos sensibles, Google exige una politica de privacidad en la ficha de tienda y dentro de la app.
- La declaracion de `Data safety` debe cubrir todas las variantes distribuidas del paquete, no solo una version o region.

### Checklist de permisos y privacidad en esta app

- [x] Camara declarada en Android
- [x] Mensaje de uso de camara declarado en iOS
- [ ] Confirmar si la foto de perfil se considera dato personal en la declaracion de privacidad
- [ ] Documentar almacenamiento local con AsyncStorage en politica de privacidad
- [ ] Verificar si hay envio de datos a servidores externos

## iOS

### Checklist para App Store

- [ ] Tener Apple Developer Program activo
- [ ] Crear app en App Store Connect
- [ ] Definir `ios.bundleIdentifier` unico
- [ ] Configurar `ios.buildNumber`
- [ ] Preparar metadatos, screenshots y categoria
- [ ] Completar `App Privacy`
- [ ] Probar con TestFlight antes de enviar a revision
- [ ] Verificar que todas las URLs incluidas funcionen
- [ ] Validar que la app este final, estable y sin contenido temporal
- [ ] Revisar App Store Review Guidelines

### Puntos tecnicos importantes

- Apple indica que, desde el `28 de abril de 2026`, las apps subidas a App Store Connect deben cumplir los requisitos minimos vigentes para los SDK mas recientes.
- Apple revisa mucho estabilidad, metadata final, enlaces funcionales, pantallas reales y experiencia correcta en dispositivos con notch y en iPad.
- La informacion de privacidad debe incluir practicas propias y de terceros; eso alimenta el `Privacy Nutrition Label`.

### TestFlight

- [ ] Crear build de prueba para iOS
- [ ] Subir a TestFlight
- [ ] Hacer prueba interna
- [ ] Hacer prueba externa si aplica
- [ ] Verificar onboarding, login, permisos y navegacion completa

### Pasos para configurar TestFlight

1. Tener activa la cuenta de `Apple Developer Program`.
2. Crear la app en `App Store Connect`.
3. Definir el `bundleIdentifier` en `app.json` y usar el mismo identificador al crear la app en App Store Connect.
4. Incrementar `ios.buildNumber` antes de cada nuevo build que vayas a probar.
5. Generar el build de iOS con Expo EAS:

```bash
eas build --platform ios --profile preview
```

6. Subir el build a Apple. Puedes hacerlo con:

```bash
eas submit --platform ios --profile production
```

7. En `App Store Connect`, abrir la app y entrar a la pestaña `TestFlight`.
8. Completar la informacion de beta.
Descripcion de la beta, que quieres que prueben, email de contacto para feedback e informacion de revision beta si haras pruebas externas.
9. Esperar a que el build aparezca disponible en TestFlight.
10. Crear grupos de testers segun el tipo de prueba.

### Prueba interna en TestFlight

1. Agregar testers internos desde usuarios del equipo en App Store Connect.
2. Apple permite hasta `100` testers internos del equipo.
3. Puedes activar distribucion automatica para que reciban builds nuevas.
4. Los testers instalan la app desde la aplicacion `TestFlight`.

### Prueba externa en TestFlight

1. Crear un grupo de testers externos.
2. Agregar el build al grupo.
3. El primer build para testers externos debe pasar `Beta App Review`.
4. Apple puede permitir hasta `10,000` testers externos.
5. Puedes invitar por correo o mediante `public link`.
6. Si usas `public link`, puedes filtrar por tipo de dispositivo o version de OS.

### Recomendaciones para TestFlight

- [ ] subir una descripcion clara de que debe probar el tester
- [ ] incluir pasos de prueba para camara, persistencia y navegacion
- [ ] probar en iPhone pequeno, iPhone con Dynamic Island y iPad
- [ ] revisar crashes y feedback desde la seccion TestFlight en App Store Connect
- [ ] no mandar a revision externa builds con texto temporal o pantallas incompletas

## Expo / EAS

### Checklist EAS

- [ ] Instalar y autenticar `eas-cli`
- [ ] Crear `eas.json`
- [ ] Configurar perfil `preview`
- [ ] Configurar perfil `production`
- [ ] Verificar credenciales iOS y Android
- [ ] Generar build de prueba
- [ ] Generar build de produccion
- [ ] Usar `eas submit` o carga manual segun necesidad

### Flujo recomendado

1. Configurar `app.json` con identificadores y versionado nativo.
2. Crear `eas.json`.
3. Generar build interna:

```bash
eas build --platform android --profile preview
eas build --platform ios --profile preview
```

4. Probar en dispositivos reales.
5. Generar build de produccion.
6. Enviar a tiendas:

```bash
eas submit --platform android --profile production
eas submit --platform ios --profile production
```

## Configuracion recomendada pendiente en `app.json`

Ejemplo minimo:

```json
{
  "expo": {
    "version": "1.0.0",
    "ios": {
      "bundleIdentifier": "com.tuempresa.persistenciaapp",
      "buildNumber": "1"
    },
    "android": {
      "package": "com.tuempresa.persistenciaapp",
      "versionCode": 1
    }
  }
}
```

## `eas.json` sugerido

Ejemplo base:

```json
{
  "build": {
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "autoIncrement": true
    }
  },
  "submit": {
    "production": {}
  }
}
```

## Material que debes tener listo para las stores

- nombre publico de la app
- subtitulo o short description
- descripcion larga
- keywords
- categoria
- email de soporte
- URL de soporte
- URL de politica de privacidad
- screenshots por dispositivo
- icono final sin errores de padding o transparencia invalida

## Riesgos comunes de rechazo

- pedir permisos que no estan justificados por una funcion visible
- politica de privacidad inexistente o generica
- metadata distinta a lo que hace la app
- app inestable, con placeholders o pantallas incompletas
- problemas de UI en dispositivos con notch, pantallas pequenas o iPad
- declaraciones incompletas en `Data safety` o `App Privacy`

## Pendientes concretos para esta app

- [ ] mapear el valor de `career` a texto legible en perfil y resumen; hoy parece persistirse el id
- [ ] definir identificadores nativos (`bundleIdentifier` y `package`)
- [ ] agregar versionado nativo (`buildNumber` y `versionCode`)
- [ ] crear `eas.json`
- [ ] escribir politica de privacidad real
- [ ] preparar screenshots de Home, Perfil, Status y Students
- [ ] probar camara, persistencia y layout en iPhone, iPad y Android
- [ ] revisar si la app necesita pantalla de soporte o enlace de privacidad dentro de la UI

## Referencias oficiales

### Android / Google Play

- Google Play Console y distribucion: https://developer.android.com/distribute/google-play
- Politicas oficiales: https://support.google.com/googleplay/android-developer/answer/9878810
- Data Safety: https://support.google.com/googleplay/android-developer/answer/10787469
- Permisos sensibles y preparacion para review: https://support.google.com/googleplay/android-developer/answer/9859455
- Requisitos de target SDK: https://support.google.com/googleplay/android-developer/answer/11926878
- Publicacion desde Android Studio: https://developer.android.com/studio/publish

### iOS / App Store

- App Store Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- Publicar en App Store: https://developer.apple.com/app-store/submitting/
- App Privacy: https://developer.apple.com/app-store/app-privacy-details/
- App Store Connect API: https://developer.apple.com/documentation/appstoreconnectapi
- TestFlight: https://developer.apple.com/testflight/

### Expo / React Native

- EAS Build: https://docs.expo.dev/build/introduction/
- Submit Android: https://docs.expo.dev/submit/android/
- Submit iOS: https://docs.expo.dev/submit/ios/
- Configuracion `app.json`: https://docs.expo.dev/versions/latest/config/app/
- Checklist Expo para app stores: https://docs.expo.dev/distribution/app-stores/

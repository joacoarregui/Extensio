# Extensio-WEB
pagina de extensio funcional

## Cómo correr localmente con PHP (para includes del navbar)

1. Asegurate de tener PHP instalado y en el PATH (ya verificaste con `php -v`).

2. En la carpeta del proyecto ejecutá:

```powershell
cd "C:\Users\joaqu\Documents\GitHub\Extensio"
php -S localhost:8000 router.php
```

3. Abrí en el navegador **usando .html** (porque php -S no hace URLs limpias):

- http://localhost:8000/index.html
- http://localhost:8000/fci.html
- http://localhost:8000/dolar.html
- etc.

El archivo `router.php` (que ya existe) hace que los `<?php include ... ?>` del navbar y footer funcionen correctamente.
   ```

   Esto crea un enlace. La carpeta aparece dentro de Laragon pero los archivos reales siguen en tu carpeta de GitHub. Cualquier cambio que hagas se ve inmediatamente.

4. Abrí en el navegador:
   http://localhost/Extensio/index.html

### Opción recomendada ahora: php -S + router (sin Laragon)

Como Laragon es una mierda, usamos el servidor PHP integrado + un router que fuerza la ejecución de PHP en los .html

**Paso a paso:**

1. Abrí PowerShell y entrá a la carpeta:
   ```powershell
   cd "C:\Users\joaqu\Documents\GitHub\Extensio"
   ```

2. Mirá qué versiones de PHP tenés (de Laragon o la que instalaste):
   ```powershell
   dir C:\laragon\bin\php
   ```
   (o `dir C:\php` si instalaste standalone)

3. Usá la ruta completa al php.exe + el router:
   Ejemplo (cambiá la versión por la tuya):
   ```powershell
   C:\laragon\bin\php\php-8.1.3\php.exe -S localhost:8000 router.php
   ```

4. Abrí en el navegador (IMPORTANTE: usá .html porque php -S no hace URLs limpias):
   - http://localhost:8000/index.html
   - http://localhost:8000/fci.html
   - http://localhost:8000/dolar.html
   etc.

El `router.php` que ya creé hace que los `<?php include ... ?>` del navbar y footer funcionen en los archivos .html.

**Si te dice que no reconoce php.exe:**
- La ruta del paso 3 tiene que ser exacta. Corré el `dir` del paso 2 para copiarla bien.

Una vez que funcione, el navbar va a cargar desde el include y no va a estar duplicado en el código.

---

**Importante:** Una vez que uses el junction o pongas la carpeta en www de Laragon, **no tenés que copiar nada más**. Editás directamente en tu carpeta de GitHub y se actualiza al instante.


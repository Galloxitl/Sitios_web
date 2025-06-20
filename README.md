# Página Web de Boda - María & Carlos

Una página web elegante y responsiva para celebrar la boda de María y Carlos, programada para el 3 de Junio de 2025 a las 6:00 PM.

## Características

- ✅ **Diseño elegante y moderno** con Bootstrap 5
- ✅ **Cuenta regresiva** en tiempo real hasta la fecha de la boda
- ✅ **Fotografía de fondo** en la sección hero
- ✅ **Galería de fotos** con diferentes tamaños y distribución
- ✅ **Diseño completamente responsivo** para móviles, tabletas y desktop
- ✅ **Animaciones suaves** y efectos visuales
- ✅ **Optimización de rendimiento** con lazy loading
- ✅ **Accesibilidad** mejorada

## Archivos del Proyecto

- `index.html` - Página principal
- `styles.css` - Estilos CSS personalizados
- `script.js` - Funcionalidad JavaScript
- `README.md` - Este archivo de documentación

## Cómo Usar

1. **Abrir la página**: Simplemente abre el archivo `index.html` en tu navegador web
2. **Servidor local** (recomendado): Usa un servidor local para mejor rendimiento

### Usando Python (servidor local):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Usando Node.js (servidor local):
```bash
# Instalar http-server globalmente
npm install -g http-server

# Ejecutar servidor
http-server
```

## Personalización

### Cambiar Información de la Pareja

Edita el archivo `index.html`:

```html
<!-- Cambiar nombres -->
<h1 class="hero-title">María & Carlos</h1>

<!-- Cambiar fecha -->
<div class="wedding-date">3 de Junio, 2025</div>

<!-- Cambiar detalles del evento -->
<div class="event-item">
    <h3>Lugar</h3>
    <p>Jardín Botánico de la Ciudad</p>
</div>
```

### Cambiar Fecha de la Boda

Edita el archivo `script.js`:

```javascript
// Línea 3 - Cambiar fecha y hora
const weddingDate = new Date('June 3, 2025 18:00:00').getTime();
```

### Cambiar Fotos

1. **Foto de fondo del hero**: Edita en `styles.css` línea 25
2. **Fotos de la galería**: Reemplaza las URLs en `index.html` sección gallery
3. **Foto de la historia**: Cambia en `index.html` sección story

### Cambiar Colores

Edita las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #d4af37;    /* Color dorado principal */
    --secondary-color: #f8f9fa;  /* Color de fondo secundario */
    --text-color: #333;          /* Color de texto principal */
    --light-text: #666;          /* Color de texto secundario */
}
```

## Estructura de la Página

1. **Hero Section**: Foto de fondo con cuenta regresiva
2. **Historia**: Sección con texto y foto de la pareja
3. **Galería**: Fotos distribuidas en diferentes tamaños
4. **Detalles del Evento**: Información de fecha, hora y lugar
5. **Footer**: Información de copyright

## Características Técnicas

- **Framework**: Bootstrap 5.3.0
- **Iconos**: Font Awesome 6.0.0
- **Fuentes**: Google Fonts (Playfair Display, Lato)
- **Imágenes**: Unsplash (placeholder)
- **JavaScript**: Vanilla JS (sin dependencias)

## Responsive Design

La página se adapta automáticamente a:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## Optimizaciones

- **Lazy Loading**: Las imágenes se cargan cuando son visibles
- **Debounce**: Optimización de eventos de scroll
- **Parallax**: Efecto deshabilitado en móviles para mejor rendimiento
- **Error Handling**: Manejo de errores de carga de imágenes

## Navegadores Soportados

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Créditos

- **Fotos de placeholder**: [Unsplash](https://unsplash.com)
- **Framework CSS**: [Bootstrap](https://getbootstrap.com)
- **Iconos**: [Font Awesome](https://fontawesome.com)

## Licencia

Este proyecto es de uso libre para fines personales y comerciales.

---

**¡Que tengan una boda maravillosa!** 💒✨ 
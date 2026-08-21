# Configuración Search Console y Bing Webmaster

## URLs críticas

- Sitemap: https://chatarrero24h.com/sitemap.xml
- Robots: https://chatarrero24h.com/robots.txt
- Contacto: https://chatarrero24h.com/contacto
- Landing principal: https://chatarrero24h.com/recogida-chatarra-madrid

## Google Search Console

### Propiedad recomendada

Usar propiedad de dominio:

```text
chatarrero24h.com
```

Verificación recomendada: DNS TXT en Cloudflare.

### Pasos

1. Entrar en Google Search Console.
2. Añadir propiedad.
3. Elegir "Dominio".
4. Introducir `chatarrero24h.com`.
5. Copiar registro TXT.
6. Añadirlo en Cloudflare → DNS → Add record → TXT.
7. Esperar propagación.
8. Verificar.
9. En Sitemaps, enviar:

```text
sitemap.xml
```

### URLs a inspeccionar manualmente

- /
- /contacto
- /recogida-chatarra-madrid
- /compra-metales-madrid
- /vaciado-pisos-madrid
- /zonas/san-fernando-de-henares
- /zonas/coslada
- /guantes-chatarra

Solicitar indexación solo después de que el dominio final apunte a la nueva web.

## Bing Webmaster Tools

### Opción recomendada

Importar desde Google Search Console.

### Pasos

1. Entrar en Bing Webmaster Tools.
2. Importar propiedad desde Google Search Console.
3. Confirmar `chatarrero24h.com`.
4. Enviar sitemap:

```text
https://chatarrero24h.com/sitemap.xml
```

5. Revisar SEO Reports.
6. Activar IndexNow si se quiere acelerar indexación en Bing/Yandex.

## Eventos GA4 a marcar como clave

Marcar como eventos clave/conversión:

- click_call
- click_whatsapp
- lead_submit

Mantener como evento informativo:

- click_affiliate
- form_start

## Checklist

- [ ] Dominio final conectado a Vercel.
- [ ] HTTPS activo.
- [ ] Sitemap accesible.
- [ ] Robots accesible.
- [ ] Search Console verificado por DNS.
- [ ] Sitemap enviado a Google.
- [ ] Bing Webmaster importado.
- [ ] Sitemap enviado a Bing.
- [ ] Eventos clave marcados en GA4.
- [ ] Primeras URLs inspeccionadas.

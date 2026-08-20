# Fase 3 — Medición y conversión

## Variables de entorno en Vercel

Añadir en Project Settings > Environment Variables:

- NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
- NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

Puedes usar solo GA4 o solo GTM. Si usas GTM, desde Tag Manager puedes centralizar GA4, Google Ads, conversiones y eventos.

## Eventos definidos

- click_call: clic en teléfono.
- click_whatsapp: clic en WhatsApp.
- click_affiliate: clic en Amazon afiliado.
- form_start: inicio de formulario.
- lead_submit: envío de formulario.

## Conversiones recomendadas en GA4

Marcar como eventos clave:

- click_call
- click_whatsapp
- lead_submit
- click_affiliate

## Google Ads

Crear conversiones:

- Llamada desde sitio web.
- Clic a WhatsApp.
- Envío de formulario.

## Search Console

Tras conectar dominio final:

1. Verificar propiedad de dominio.
2. Enviar https://chatarrero24h.com/sitemap.xml
3. Revisar páginas no indexadas.
4. Revisar consultas por servicio + zona.
5. Revisar Core Web Vitals.

## Bing Webmaster Tools

1. Importar desde Google Search Console.
2. Enviar sitemap.
3. Activar IndexNow si se implementa en fase posterior.

## UTMs recomendados

Google Business Profile:

https://chatarrero24h.com/?utm_source=google&utm_medium=organic&utm_campaign=google_business_profile

GBP publicaciones:

https://chatarrero24h.com/contacto?utm_source=google&utm_medium=organic&utm_campaign=gbp_post

Directorios:

https://chatarrero24h.com/?utm_source=directorio&utm_medium=referral&utm_campaign=seo_local

## Checklist

- [ ] Crear GA4.
- [ ] Crear GTM si se usará Tag Manager.
- [ ] Añadir variables en Vercel.
- [ ] Marcar conversiones en GA4.
- [ ] Configurar Google Ads conversiones.
- [ ] Conectar Search Console.
- [ ] Enviar sitemap.
- [ ] Conectar Bing Webmaster Tools.
- [ ] Validar eventos en tiempo real.

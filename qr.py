import qrcode

# URL que quieres convertir en QR
url = "www.linkedin.com/in/sergio-garcia-boer-malaga"

# Crear el código QR
qr = qrcode.make(url)

# Mostrar la imagen del QR
qr.show()

# Guardar el QR como imagen
qr.save("qrLinkedin.png")

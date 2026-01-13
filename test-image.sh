#!/bin/bash

echo "=========================================="
echo "🔍 Test de l'image de profil"
echo "=========================================="
echo ""

echo "1️⃣ Vérification de l'image source..."
if [ -f "/home/kali/portfolio/public/profile.jpg" ]; then
    SIZE=$(ls -lh /home/kali/portfolio/public/profile.jpg | awk '{print $5}')
    echo "   ✅ Image trouvée : $SIZE"
else
    echo "   ❌ Image NON trouvée dans public/"
    exit 1
fi

echo ""
echo "2️⃣ Build du projet..."
cd /home/kali/portfolio
npm run build > /tmp/build.log 2>&1
if [ $? -eq 0 ]; then
    echo "   ✅ Build réussi"
else
    echo "   ❌ Build échoué"
    cat /tmp/build.log
    exit 1
fi

echo ""
echo "3️⃣ Vérification de l'image dans dist/..."
if [ -f "/home/kali/portfolio/dist/profile.jpg" ]; then
    SIZE=$(ls -lh /home/kali/portfolio/dist/profile.jpg | awk '{print $5}')
    echo "   ✅ Image copiée dans dist/ : $SIZE"
else
    echo "   ❌ Image NON trouvée dans dist/"
    exit 1
fi

echo ""
echo "4️⃣ Vérification du contenu de dist/..."
echo "   Fichiers dans dist/:"
ls -lh /home/kali/portfolio/dist/ | tail -n +2 | awk '{print "      - " $9 " (" $5 ")"}'

echo ""
echo "=========================================="
echo "✅ TOUS LES TESTS RÉUSSIS !"
echo "=========================================="
echo ""
echo "Pour tester localement :"
echo "   cd /home/kali/portfolio"
echo "   npm run dev"
echo ""
echo "Pour déployer :"
echo "   npm run deploy"
echo ""

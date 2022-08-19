import FreeFire from "../Assets/images/FreeFire.png"
import PUBGMOBILE from "../Assets/images/PUBG.png"
import CALLDUTY from "../Assets/images/Callofduty.png"
import Asphalt9 from "../Assets/images/Asphalt.jpg"
import Granny from "../Assets/images/Granny.png"
import zombi from "../Assets/images/katchers.png"
import clash from "../Assets/images/Clash.png"
import kontr from "../Assets/images/FORGEGAMES.png"
import gta from "../Assets/images/GTA.jpg"
import biriki from "../Assets/images/stickman.png"
import oltin from "../Assets/images/subway.png"
import pichoq from "../Assets/images/knife.png"
export const games = [
    { image: FreeFire, nomi: "Free Fire", id: 1, desk:"356 MB",matn:"Free Fire - bu jangovar o'yin bo'lib, unda 50 ga yaqin o'yinchi jangovar royale rejimida kurashadi, ya'ni ular oxirgi omon qolish huquqi uchun o'zaro kurashadilar. Free Firening qirollik jangi janridagi boshqa o'yinlardan asosiy farqi xarakterni rivojlantirish tizimining mavjudligi va ularning mahoratidir." },
    { image: PUBGMOBILE, nomi: "PUBG Mobile", id: 2, desk:"668 MB",matn:"PUBG Mobile 2017 yilda chiqarilganidan buyon dunyo bo‘ylab PubG'ning geymerlari keskin ko‘payib bormoqda. Ayniqsa, o‘tgan yili Android va iOS talqini chiqarilishi bilan o‘yinning muxlislari soni keskin ortib ketdi. Biroq o‘yin bunchalar mashhur bo‘lishiga qaramay, o‘yinchilar bilmagan ko‘plab qiziq ma’lumotlar bor." },
    { image: CALLDUTY, nomi: "Call of duty", id: 3, desk:"2,3 GB",matn:"Call of Duty (so'zma-so'z - Call of Duty) - Amerikaning Activision kompaniyasi tomonidan ishlab chiqarilgan birinchi shaxs otishma janridagi kompyuter o'yinlari seriyasi. Seriyadagi o'yinlar Infinity Ward, Treyarch va Sledgehammer Games kabi studiyalar tomonidan ishlab chiqilgan. 2003 yildagi birinchi o'yindan boshlangan seriyadagi dastlabki o'yinlar Ikkinchi jahon urushiga qaratilgan; Kelajakda seriya doirasida o'yinlar ham chiqarildi, ularning harakati Sovuq urush davrida, yaqin kelajakda, hatto kosmosda ham sodir bo'lgan." },
    { image: Asphalt9, nomi: "Asphalt 9", id: 4, desk:"2,8 GB",matn:"Asphalt 9: Legends - bu Gameloft Barcelona tomonidan ishlab chiqilgan va Gameloft tomonidan nashr etilgan poyga o'yini. Asfalt o'yinlari seriyasida ketma-ket to'qqizinchi bo'ldi. U o‘zidan oldingilaridan ko‘plab yangi avtomobillar, yangi boshqaruv sxemalari va o‘yin rejimlari, shuningdek, birinchi marta Asphalt 6: Adrenalinda taqdim etilgan qayta ishlangan nitroto‘lqini bilan ajralib turadi. 2013-yilda chiqarilgan Asphalt 9: Airborne seriyasidagi oldingi o‘yin bilan taqqoslaganda, bu yerda grafik komponent sezilarli darajada yaxshilandi." },
    { image: Granny, nomi: "Granny", id: 5, desk:"88 MB",matn:"Granny - bu Shvetsiyaning DVloper kompaniyasi tomonidan ishlab chiqilgan va nashr etilgan omon qolish uchun dahshatli video o'yin. Bu Slendrina seriyali o'yinlarning spin-offidir. O'yinda noma'lum qahramon eski uyda tuzoqqa tushib, uyg'ongan va endi u 5 kun ichida uydan chiqib ketish uchun o'yinning asosiy antagonisti buvisidan qochib, turli jumboqlarni hal qilishi kerak." },
    { image: zombi, nomi: "Catchers", id: 6, desk:"80 MB",matn:"Zombie Hunters - bu zombi bilan qoplangan dunyoda o'rnatilgan sarguzashtli o'yin! Yer sayyorasi o'lmaganlar bilan to'ldirilgan. Ammo biz omadlimiz: AJ va Bud, ikki intergalaktik biznesmen sayyoramizda o'zlarining do'konlarini ochishga qaror qilishdi. Ular hammaning xavfsizligi uchun er yuzidagi barcha zombilarni tutmoqchi. yaxshi va ularning foydasi." },
    { image: clash, nomi: "Clash of Clans", id: 7,desk:"257 MB",matn:"Clash of Clans - bu real vaqt strategiyasi bo'lib, unda o'yinchi har bir harakatni diqqat bilan rejalashtirishi va hisoblashi kerak, chunki o'yinchi nafaqat o'z qishlog'ini boshqa foydalanuvchilarning hujumlaridan himoya qilishi, balki ularga o'zi ham hujum qilishi kerak. Bitta kampaniyadan o'tishdan tashqari, siz turnirlarda qatnashishingiz mumkin. Ularda munosib o'rin egallash uchun siz boshqa o'yinchilar bilan faol kurashishingiz kerak." },
    { image: kontr, nomi: "Forgegames", id: 8, desk:"313 MB",matn:"Oyin tavsifi Onlayn yoki botlar bilan oynang Ikki jamoa ortasidagi qarama-qarshilik. Ikki jamoa ortasidagi qarama-qarshilik. 9 ta oyin rejimi (klassik, tirilish, bayroqni qolga olish, zombi rejimi, bomba rejimi, pichoq rejimi, olim oyini,snayper rejimi) Har bir jamoa uchun 8 ta belgi Qurol uchun terilar (134 dona)" },
    { image: gta, nomi: "GTA 5", id: 9, desk:"3,4 GB",matn:"Grand Theft Auto (qisqacha GTA deb ataladi) - bu asosan britaniyalik dasturchi Rockstar North (sobiq DMA Design) tomonidan yaratilgan va ishlab chiqilgan va Rockstar Games tomonidan nashr etilgan ko'p platformali jangovar-sarguzashtli video o'yinlar seriyasidir. Aka-uka Den va Sem Xauserlar, shuningdek, o'yin dizayneri Lesli Benzis seriyadagi bir qator o'yinlarning rivojlanishida muhim rol o'ynagan. Grand Theft Auto III bilan boshlangan seriyadagi o'yinlar tarixdagi eng ko'p e'tirof etilgan va eng ko'p sotilgan o'yinlar qatoriga kiradi; seriyali video o'yinlar sanoatidagi eng tijoriy muvaffaqiyatli media franchayzinglaridan biri hisoblanadi. 2022 yil uchun turli platformalarda seriyadagi o'n bitta o'yin mavjud." },
    { image: biriki, nomi: "Stickman Party 2 3 4", id: 10, desk:"52 MB",matn:"Stickman Party - bu bitta qurilmada (telefon yoki planshet) o'ynash mumkin bo'lgan bir, ikki, uch yoki to'rtta o'yinchi uchun o'yinlarni o'z ichiga olgan stickman o'yinlari to'plami. Stickman o'yinlari juda oddiy qoidalarga ega. Siz Internet / Wi-Fisiz o'ynashingiz mumkin, chunki bu erda multiplayer mahalliy, oflayn, bitta qurilmada." },
    { image: oltin, nomi: "Subway Surfers", id: 11, desk:"117 MB",matn:"Subway Surfers - bu iOS va Android uchun mobil platforma o'yini. Windows yoki macOS bilan ishlaydigan kompyuterlar uchun versiya mavjud. Daniya kompaniyalari Kiloo va SYBO Games tomonidan ishlab chiqilgan. Google Play-da bir milliarddan ortiq yuklab olishlar bilan u dunyodagi eng mashhur mobil o'yinlardan biridir[1].  2013 yildan beri oyin Jahon sayohati mavzusini oz ichiga oladi, unda oyinchilar dunyoning mashhur shaharlari bo'ylab yugurishlari mumkin. Shahar ozgarishi bilan yangilanishlar har uch haftada doimiy ravishda chiqariladi."},
    { image: pichoq, nomi: "Knife Hit", id: 12, desk:"58 MB",matn:"Pichoq 1999-yilda[2] Karin Dreyer Andersson va uning ukasi Olof Dreyer tomonidan tashkil etilgan shved dueti boʻlib, ular birgalikda Rabid Recordsni boshqaradi. Elektron musiqa ijro etildi. Duet birinchi marta Xose Gonsales tomonidan Sony yorlig'ida yozilgan Heartbeats qo'shig'ining chiqishi bilan xalqaro e'tiborni qozondi." },

]
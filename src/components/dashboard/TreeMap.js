import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Treemap } from '@ant-design/plots'

export default function DemoTreemap() {
  const fetchData = [
    {
      name: '其他',
      brand: '其他',
      value: 25.09647118932181,
      children: [
        {
          name: '其他',
          value: 25.0965,
        },
      ],
    },
    {
      name: '三星',
      brand: '三星',
      value: 16.711901453726654,
      children: [
        {
          name: '三星Galaxy Note II',
          value: 50.1588,
        },
        {
          name: '三星Galaxy Note III',
          value: 1.5111,
        },
        {
          name: '三星Galaxy S IV',
          value: 1.4709,
        },
        {
          name: '三星Galaxy S III',
          value: 1.2779,
        },
        {
          name: '三星Galaxy Grand 2',
          value: 0.5417,
        },
        {
          name: '三星Galaxy S II',
          value: 0.441,
        },
        {
          name: '三星Galaxy S V',
          value: 0.4101,
        },
        {
          name: '三星Galaxy Win',
          value: 0.3803,
        },
        {
          name: '三星Galaxy Mega 5.8',
          value: 0.2946,
        },
        {
          name: '三星Galaxy Note',
          value: 0.2532,
        },
        {
          name: '三星GT-S7562',
          value: 0.2221,
        },
        {
          name: '三星Galaxy Ace',
          value: 0.2072,
        },
        {
          name: '三星Galaxy A7',
          value: 0.1989,
        },
        {
          name: '三星GT-S7568',
          value: 0.1914,
        },
        {
          name: '三星A5000',
          value: 0.1679,
        },
        {
          name: '三星SM-G5308W',
          value: 0.1528,
        },
        {
          name: '三星GT-S7572',
          value: 0.1362,
        },
        {
          name: '三星Galaxy Trend 3',
          value: 0.1262,
        },
        {
          name: '三星GALAXY S6',
          value: 0.1159,
        },
        {
          name: '三星Galaxy S III Neo+',
          value: 0.1121,
        },
        {
          name: '三星Galaxy Grand',
          value: 0.1089,
        },
        {
          name: '三星GT-i9082',
          value: 0.1029,
        },
        {
          name: '三星SM-G3812',
          value: 0.0994,
        },
        {
          name: '三星SM-G3818',
          value: 0.0988,
        },
        {
          name: '三星i8268',
          value: 0.0966,
        },
        {
          name: '三星n9100',
          value: 0.0961,
        },
        {
          name: '三星GT-i8262D',
          value: 0.0958,
        },
        {
          name: '三星i739',
          value: 0.0926,
        },
        {
          name: '三星Galaxy Grand Duos',
          value: 0.0914,
        },
        {
          name: '三星R830',
          value: 0.0907,
        },
        {
          name: '三星G9098',
          value: 0.087,
        },
        {
          name: '三星Galaxy S',
          value: 0.0835,
        },
        {
          name: '三星GT-S7898',
          value: 0.0796,
        },
        {
          name: '三星 GALAXY S6',
          value: 0.0788,
        },
        {
          name: '三星I9508',
          value: 0.0749,
        },
        {
          name: '三星N9006',
          value: 0.0748,
        },
        {
          name: '三星Galaxy Mega Plus',
          value: 0.0747,
        },
        {
          name: '三星Galaxy SM-G9008W',
          value: 0.0736,
        },
        {
          name: '三星Galaxy Mega 6.3',
          value: 0.0735,
        },
        {
          name: '三星GT-S7568I',
          value: 0.0734,
        },
        {
          name: '三星Galaxy S Duos',
          value: 0.072,
        },
        {
          name: '三星 Galaxy S4 GT-I9508V',
          value: 0.0716,
        },
        {
          name: '三星Galaxy Note 3',
          value: 0.0667,
        },
        {
          name: '三星SM-W2014',
          value: 0.0666,
        },
        {
          name: '三星SCH-I679',
          value: 0.0646,
        },
        {
          name: '三星SCH-I829',
          value: 0.0645,
        },
        {
          name: '三星Galaxy Note 10.1',
          value: 0.0632,
        },
        {
          name: '三星GT-S7562C',
          value: 0.0628,
        },
        {
          name: '三星Galaxy Mini',
          value: 0.0615,
        },
        {
          name: '三星 GALAXY CORE Lite 4G',
          value: 0.0585,
        },
        {
          name: '三星Galaxy Trend',
          value: 0.0567,
        },
        {
          name: '三星Galaxy Note 8.0',
          value: 0.0565,
        },
        {
          name: '三星Galaxy Tab 3 7.0',
          value: 0.056,
        },
        {
          name: '三星Galaxy Ace 2',
          value: 0.0559,
        },
        {
          name: '三星G5309W',
          value: 0.0559,
        },
        {
          name: '三星i879（Galaxy Grand）',
          value: 0.0548,
        },
        {
          name: '三星Galaxy NoteII',
          value: 0.0542,
        },
        {
          name: '三星SM-G3568V',
          value: 0.054,
        },
        {
          name: '三星SM-3819D',
          value: 0.0531,
        },
        {
          name: '三星G3608',
          value: 0.0518,
        },
        {
          name: '三星Galaxy Tab 3 8.0',
          value: 0.0511,
        },
        {
          name: '三星G7508Q',
          value: 0.0505,
        },
        {
          name: '三星G5108Q ',
          value: 0.0503,
        },
        {
          name: '三星SM-G3502I',
          value: 0.0499,
        },
        {
          name: '三星G3509I',
          value: 0.0492,
        },
        {
          name: ' 三星galaxy note ii',
          value: 0.0491,
        },
        {
          name: '三星 E7000',
          value: 0.0479,
        },
        {
          name: '三星 A7009',
          value: 0.0477,
        },
        {
          name: '三星N9109W',
          value: 0.0474,
        },
        {
          name: '三星GT-i9260',
          value: 0.0473,
        },
        {
          name: '三星SCH-W2013',
          value: 0.0472,
        },
        {
          name: '三星GT-S7278U',
          value: 0.046,
        },
        {
          name: '三星SM-A5009',
          value: 0.0459,
        },
        {
          name: '三星Galaxy Y',
          value: 0.0457,
        },
        {
          name: '三星Note4 SM-N910U',
          value: 0.0454,
        },
        {
          name: '三星N9108V ',
          value: 0.0453,
        },
      ],
    },
    {
      name: '华为',
      brand: '华为',
      value: 8.45923464256909,
      children: [
        {
          name: '华为荣耀3X',
          value: 0.4411,
        },
        {
          name: '华为荣耀3C',
          value: 0.4072,
        },
        {
          name: '华为P6',
          value: 0.3111,
        },
        {
          name: '华为Y511-T00',
          value: 0.2594,
        },
        {
          name: '华为 H60-L01',
          value: 0.2561,
        },
        {
          name: '华为荣耀畅玩4X',
          value: 0.2477,
        },
        {
          name: '华为G610',
          value: 0.2352,
        },
        {
          name: '华为C8812',
          value: 0.2259,
        },
        {
          name: '华为G621-TL00',
          value: 0.2124,
        },
        {
          name: '华为MT7-TL10 ',
          value: 0.2051,
        },
        {
          name: '华为p7-l07',
          value: 0.2,
        },
        {
          name: '华为荣耀Che1-CL10',
          value: 0.1992,
        },
        {
          name: '华为mt7-cl00',
          value: 0.1955,
        },
        {
          name: '华为c8817d',
          value: 0.1859,
        },
        {
          name: '华为 p7-l09',
          value: 0.1752,
        },
        {
          name: '华为C8815',
          value: 0.1716,
        },
        {
          name: '华为C8813',
          value: 0.1565,
        },
        {
          name: '华为mt7-tl00',
          value: 0.1492,
        },
        {
          name: '华为G520',
          value: 0.1473,
        },
        {
          name: '华为C8816',
          value: 0.1422,
        },
        {
          name: '华为荣耀6 Plus',
          value: 0.137,
        },
      ],
    },
    {
      name: '小米',
      brand: '小米',
      value: 8.168930119898944,
      children: [
        {
          name: '小米手机M3',
          value: 2.5106,
        },
        {
          name: '小米手机2S',
          value: 1.6483,
        },
        {
          name: '小米手机M4',
          value: 1.5656,
        },
        {
          name: '小米手机M2',
          value: 0.5365,
        },
        {
          name: '小米手机2A',
          value: 0.4249,
        },
        {
          name: '小米手机1s',
          value: 0.3743,
        },
        {
          name: '小米手机M1',
          value: 0.3527,
        },
        {
          name: '小米Note',
          value: 0.3486,
        },
        {
          name: '小米平板',
          value: 0.2879,
        },
        {
          name: '其他',
          value: 0.1195,
        },
      ],
    },
    {
      name: '红米',
      brand: '红米',
      value: 6.860016513545617,
      children: [
        {
          name: '红米手机1s',
          value: 2.0981,
        },
        {
          name: '红米note',
          value: 1.9054,
        },
        {
          name: '红米手机',
          value: 0.9529,
        },
        {
          name: '红米Note 1s',
          value: 0.8712,
        },
        {
          name: '红米HM2a',
          value: 0.6083,
        },
        {
          name: '红米1S',
          value: 0.377,
        },
        {
          name: '其他',
          value: 0.047,
        },
      ],
    },
    {
      name: 'vivo',
      brand: 'vivo',
      value: 6.6900485928653595,
      children: [
        {
          name: 'vivo X3T',
          value: 0.5202,
        },
        {
          name: 'vivo Y27',
          value: 0.3573,
        },
        {
          name: 'vivo Y13l',
          value: 0.3561,
        },
        {
          name: 'vivo Y11it',
          value: 0.3427,
        },
        {
          name: 'vivo X5Max',
          value: 0.3199,
        },
        {
          name: 'vivo Y23L',
          value: 0.3177,
        },
        {
          name: 'vivo Y13',
          value: 0.2781,
        },
        {
          name: 'vivo X3L',
          value: 0.2702,
        },
        {
          name: 'vivo X5sl',
          value: 0.2614,
        },
        {
          name: 'vivo X5L',
          value: 0.2418,
        },

        {
          name: '其他',
          value: 0.2509,
        },
      ],
    },
    {
      name: '联想',
      brand: '联想',
      value: 4.83119057920539,
      children: [
        {
          name: '联想A320T',
          value: 0.2273,
        },
        {
          name: '联想A788t',
          value: 0.2138,
        },
        {
          name: '联想A360T',
          value: 0.1515,
        },
      ],
    },
    {
      name: 'OPPO',
      brand: 'OPPO',
      value: 4.724206371886631,
      children: [
        {
          name: 'OPPO 1107',
          value: 0.3173,
        },
        {
          name: 'OPPO R831S',
          value: 0.2395,
        },
        {
          name: 'OPPO R7007',
          value: 0.2307,
        },
        {
          name: 'OPPO R2017',
          value: 0.2252,
        },
        {
          name: 'OPPO R1s',
          value: 0.2232,
        },
        {
          name: 'OPPO R8207',
          value: 0.2153,
        },
        {
          name: 'OPPO R831t',
          value: 0.1976,
        },
        {
          name: 'OPPO R821t',
          value: 0.1796,
        },
        {
          name: 'OPPO R6007',
          value: 0.1794,
        },
        {
          name: 'OPPO X9007',
          value: 0.1622,
        },
      ],
    },
    {
      name: '酷派',
      brand: '酷派',
      value: 4.600366818169094,
      children: [
        {
          name: '酷派8720L',
          value: 0.293,
        },
        {
          name: '酷派8675',
          value: 0.1981,
        },
        {
          name: '酷派大神F1',
          value: 0.1923,
        },
        {
          name: '酷派8702',
          value: 0.1439,
        },
        {
          name: '酷派8729',
          value: 0.1329,
        },
        {
          name: '酷派8297-T01',
          value: 0.1306,
        },
        {
          name: '酷派8705',
          value: 0.129,
        },
        {
          name: '酷派Y75',
          value: 0.1256,
        },
        {
          name: '酷派8675-A',
          value: 0.1103,
        },
        {
          name: '酷派5890',
          value: 0.104,
        },
        {
          name: '酷派8702D',
          value: 0.1018,
        },
        {
          name: '酷派大神F2',
          value: 0.079,
        },
        {
          name: '酷派8730L',
          value: 0.0763,
        },
        {
          name: '酷派7295',
          value: 0.0747,
        },
        {
          name: '酷派5951',
          value: 0.0746,
        },
        {
          name: '酷派5950',
          value: 0.0718,
        },
        {
          name: '酷派K1',
          value: 0.0686,
        },
      ],
    },
    {
      name: '魅族',
      brand: '魅族',
      value: 1.6772881053417859,
      children: [
        {
          name: '魅族m1 note',
          value: 0.4044,
        },
        {
          name: '魅族MX4',
          value: 0.3793,
        },
        {
          name: '魅族MX2',
          value: 0.3,
        },
        {
          name: '魅族MX4 Pro',
          value: 0.1497,
        },
        {
          name: '魅族MX3',
          value: 0.148,
        },
        {
          name: '魅族M355',
          value: 0.0984,
        },
        {
          name: '魅族 m463c',
          value: 0.0541,
        },
        {
          name: '魅族M356',
          value: 0.0419,
        },
        {
          name: '魅族M9(8G)',
          value: 0.0275,
        },
        {
          name: '魅族M8 SE(8G)',
          value: 0.0252,
        },
        {
          name: '其他',
          value: 0.0488,
        },
      ],
    },
    {
      name: '中兴',
      brand: '中兴',
      value: 1.590510084675687,
      children: [
        {
          name: '中兴U807',
          value: 0.132,
        },
        {
          name: '中兴U795',
          value: 0.1158,
        },
        {
          name: '中兴U817',
          value: 0.0662,
        },
        {
          name: '中兴V5S N918St',
          value: 0.0633,
        },
        {
          name: '中兴A880',
          value: 0.062,
        },
        {
          name: '中兴N909',
          value: 0.0478,
        },
        {
          name: '中兴U950',
          value: 0.0385,
        },
        {
          name: '中兴g718c',
          value: 0.0326,
        },
        {
          name: '中兴Q301C',
          value: 0.0325,
        },
        {
          name: '中兴U809',
          value: 0.0299,
        },
        {
          name: '中兴N880E',
          value: 0.0292,
        },
        {
          name: '中兴U819',
          value: 0.0267,
        },
        {
          name: '中兴V889D',
          value: 0.0264,
        },
        {
          name: '中兴q505t',
          value: 0.0236,
        },
        {
          name: '中兴U879',
          value: 0.0235,
        },
        {
          name: '中兴G717C',
          value: 0.0235,
        },
        {
          name: '中兴U930',
          value: 0.022,
        },

        {
          name: '中兴U969',
          value: 0.0037,
        },
        {
          name: '中兴U5',
          value: 0.0036,
        },
        {
          name: '中兴U980',
          value: 0.0036,
        },
        {
          name: '中兴U889',
          value: 0.0036,
        },
        {
          name: '中兴N983',
          value: 0.0036,
        },
        {
          name: '中兴U807N',
          value: 0.0033,
        },
        {
          name: '中兴N880S',
          value: 0.0033,
        },
        {
          name: '其他',
          value: 0.0615,
        },
      ],
    },
    {
      name: '金立',
      brand: '金立',
      value: 1.526388460481574,
      children: [
        {
          name: '金立GN151',
          value: 0.2131,
        },
        {
          name: '金立S5.1',
          value: 0.188,
        },
        {
          name: '金立V183',
          value: 0.1028,
        },
        {
          name: '金立V188S',
          value: 0.0781,
        },
        {
          name: '金立gn9006',
          value: 0.0772,
        },
        {
          name: '金立GN9000',
          value: 0.0682,
        },
        {
          name: '金立V182',
          value: 0.0633,
        },
        {
          name: '金立F301',
          value: 0.0595,
        },
        {
          name: '金立S5.5',
          value: 0.0549,
        },

        {
          name: '其他',
          value: 0.0603,
        },
      ],
    },
    {
      name: 'HTC',
      brand: 'HTC',
      value: 1.481608507729738,
      children: [
        {
          name: 'HTC One',
          value: 0.1727,
        },
        {
          name: 'HTC D816t',
          value: 0.0705,
        },
        {
          name: 'HTC Desire 816',
          value: 0.051,
        },
        {
          name: 'HTC Incredible G11',
          value: 0.0495,
        },
        {
          name: 'HTC One X(G23)',
          value: 0.0494,
        },
        {
          name: 'HTC Desire S(G12)',
          value: 0.0432,
        },
        {
          name: 'HTC X920e Butterfly',
          value: 0.0413,
        },
        {
          name: 'HTC incredible S(G11)',
          value: 0.0379,
        },
        {
          name: 'HTC One M8t',
          value: 0.036,
        },
        {
          name: 'HTC T329t',
          value: 0.0321,
        },
        {
          name: 'HTC 新渴望V(T328w)',
          value: 0.0308,
        },
        {
          name: 'HTC 新渴望VT(T328t)',
          value: 0.0293,
        },
        {
          name: 'HTC T528w',
          value: 0.0277,
        },
        {
          name: 'HTC Magic G2(myTouch 3G)',
          value: 0.0265,
        },
        {
          name: 'HTC T528t',
          value: 0.0245,
        },
        {
          name: 'htc d816x',
          value: 0.024,
        },
        {
          name: 'HTC Sensation XE(G18)',
          value: 0.0219,
        },
        {
          name: 'HTC Desire D316d',
          value: 0.0214,
        },
        {
          name: 'HTC D820U',
          value: 0.0205,
        },
        {
          name: 'HTC D820t',
          value: 0.0204,
        },
        {
          name: 'HTC T528d（One SC）（电信版One S）',
          value: 0.0191,
        },
        {
          name: 'HTC d816d',
          value: 0.0189,
        },
        {
          name: 'HTC G9（Aria）',
          value: 0.0183,
        },
        {
          name: 'HTC Desire HD(G10)',
          value: 0.0168,
        },
        {
          name: 'htc one e',
          value: 0.0161,
        },
        {
          name: 'HTC 新渴望VC(T328d)',
          value: 0.0152,
        },
        {
          name: 'htc M4',
          value: 0.0149,
        },
        {
          name: 'HTC 夺目3D X515m(联通版)',
          value: 0.0145,
        },

        {
          name: 'HTC HD2(Leo)',
          value: 0.0027,
        },
        {
          name: 'HTC Desire C(A320e)',
          value: 0.0026,
        },
        {
          name: 'HTC微客 C510e',
          value: 0.0026,
        },
        {
          name: 'HTC Dream(G1)',
          value: 0.0026,
        },
        {
          name: 'HTC EVO 3D',
          value: 0.0023,
        },
        {
          name: '其他',
          value: 0.0583,
        },
      ],
    },
    {
      name: '索尼',
      brand: '索尼',
      value: 1.2413739743388843,
      children: [
        {
          name: '索尼Xperia Z3',
          value: 0.2293,
        },
        {
          name: '索尼s39h xperia c',
          value: 0.2161,
        },
        {
          name: '索尼s55t',
          value: 0.0812,
        },
        {
          name: '索尼L36h(Xperia Z)',
          value: 0.0806,
        },
        {
          name: '索尼L39h(Xperia Z1)',
          value: 0.0599,
        },
        {
          name: '索尼爱立信LT18i(Xperia arc S)',
          value: 0.0514,
        },
        {
          name: '索尼S39h(Xperia C)',
          value: 0.04,
        },
        {
          name: '索尼LT26i(Xperia S)',
          value: 0.0384,
        },
        {
          name: '索尼 LT26ii(Xperia SL)',
          value: 0.0345,
        },
        {
          name: '索尼ST25i(Xperia U)',
          value: 0.0317,
        },
        {
          name: '索尼D6653',
          value: 0.0315,
        },
        {
          name: '索尼A77',
          value: 0.0296,
        },
        {
          name: '索尼LT29i(Xperia GX SO-04D)',
          value: 0.0229,
        },
        {
          name: '索尼Xperia Z2 L50t',
          value: 0.0206,
        },
        {
          name: '索尼Xperia Z2',
          value: 0.019,
        },
        {
          name: '索尼LT22i(Xperia P)',
          value: 0.0182,
        },
        {
          name: '索尼LT28h(Xperia ion)',
          value: 0.0164,
        },
        {
          name: '索尼爱立信Xperia X7 mini',
          value: 0.0156,
        },
        {
          name: '索尼 Xperia C3 D2533',
          value: 0.0153,
        },
        {
          name: '索尼Xperia T2 Ultra',
          value: 0.0129,
        },
        {
          name: '索尼XL39h(Xperia Z Ultra)',
          value: 0.0123,
        },
        {
          name: '索尼Xperia T2 Ultra XM50t',
          value: 0.0115,
        },
        {
          name: '索尼L35h(Xperia ZL)',
          value: 0.0096,
        },
        {
          name: '索尼M35h(Xperia SP)',
          value: 0.0093,
        },
        {
          name: '索尼C680X(Xperia UL)',
          value: 0.0087,
        },
        {
          name: '索尼LT26w(Xperia acro S)',
          value: 0.0086,
        },
        {
          name: '索尼爱立信MT15i(Xperia neo)',
          value: 0.0081,
        },
        {
          name: '索尼Xperia SP',
          value: 0.0079,
        },
        {
          name: '索尼爱立信E15i(Xperia X8)',
          value: 0.0078,
        },
        {
          name: '索尼爱立信ST18i(Xperia ray)',
          value: 0.0068,
        },
        {
          name: '索尼M36h(Xperia ZR)',
          value: 0.0067,
        },
        {
          name: '索尼L39t(Xperia Z1)',
          value: 0.0067,
        },
        {
          name: '索尼MT27i(Xperia sola)',
          value: 0.0066,
        },
        {
          name: '索尼LT25i(Xperia VC)',
          value: 0.0058,
        },
        {
          name: '索尼ST26i(Xperia J)',
          value: 0.0058,
        },
        {
          name: '索尼Xperia L',
          value: 0.0042,
        },
        {
          name: '索尼爱立信LT15i(Xperia Arc  X12)',
          value: 0.0036,
        },
        {
          name: '其他',
          value: 0.0463,
        },
      ],
    },
    {
      name: '海信',
      brand: '海信',
      value: 0.6904937214414083,
      children: [
        {
          name: '海信 HS-X8T',
          value: 0.0321,
        },
        {
          name: '海信E913',
          value: 0.0272,
        },
        {
          name: '海信E602T',
          value: 0.0257,
        },
        {
          name: '海信E621T',
          value: 0.0234,
        },
        {
          name: '海信HS-E600M',
          value: 0.0227,
        },
        {
          name: '海信EG939',
          value: 0.0215,
        },
        {
          name: '海信EG916',
          value: 0.0208,
        },
        {
          name: '海信EG970',
          value: 0.0207,
        },
        {
          name: '海信E602M',
          value: 0.0205,
        },
        {
          name: '海信EG936D',
          value: 0.02,
        },
        {
          name: '海信E601M',
          value: 0.0189,
        },
        {
          name: '海信E820',
          value: 0.0188,
        },
        {
          name: '海信EG966',
          value: 0.0187,
        },
        {
          name: '海信T929',
          value: 0.0183,
        },
        {
          name: '海信T928',
          value: 0.0179,
        },
        {
          name: '海信100t',
          value: 0.0173,
        },
        {
          name: '海信HS-EG978',
          value: 0.0157,
        },
        {
          name: '海信HS-EG971',
          value: 0.0156,
        },
        {
          name: '海信EG929',
          value: 0.0153,
        },
        {
          name: '海信HS-E260T',
          value: 0.0152,
        },
        {
          name: '海信EG901',
          value: 0.0122,
        },
        {
          name: '海信E912',
          value: 0.0116,
        },
        {
          name: '海信 E613M',
          value: 0.0107,
        },
        {
          name: '海信HS-I630T',
          value: 0.0105,
        },
        {
          name: '海信E620M',
          value: 0.0088,
        },
        {
          name: '海信U8',
          value: 0.0087,
        },
        {
          name: '海信HS-X68T',
          value: 0.0087,
        },
        {
          name: '海信U980',
          value: 0.0084,
        },
        {
          name: '海信E912S',
          value: 0.0083,
        },
        {
          name: '海信T912',
          value: 0.0082,
        },
        {
          name: '海信T959S1',
          value: 0.008,
        },
        {
          name: '海信E956Q',
          value: 0.0078,
        },
        {
          name: '海信E968',
          value: 0.0078,
        },
        {
          name: '海信HS-U978',
          value: 0.007,
        },
        {
          name: '海信hs-e200t',
          value: 0.0068,
        },

        {
          name: '海信T970',
          value: 0.0023,
        },
        {
          name: '其他',
          value: 0.0267,
        },
      ],
    },
    {
      name: '天语',
      brand: '天语',
      value: 0.5429533549715655,
      children: [
        {
          name: '天语Touch3',
          value: 0.0498,
        },
        {
          name: '天语T619',
          value: 0.0391,
        },
        {
          name: '天语 Kis2',
          value: 0.0377,
        },
        {
          name: '天语W95',
          value: 0.0325,
        },
        {
          name: '天语C986t',
          value: 0.0224,
        },
        {
          name: '天语C666t',
          value: 0.0224,
        },
        {
          name: '天语T60',
          value: 0.0177,
        },
        {
          name: '天语TOUCH 2C',
          value: 0.0159,
        },
        {
          name: '天语T619+',
          value: 0.0151,
        },
        {
          name: '天语W800',
          value: 0.0146,
        },
        {
          name: '天语k-touche8',
          value: 0.0128,
        },
        {
          name: '天语T789',
          value: 0.0127,
        },
        {
          name: '天语Touch 3c',
          value: 0.0126,
        },
        {
          name: '天语K-TouchL820',
          value: 0.0108,
        },
        {
          name: '天语W619(小黄蜂)',
          value: 0.0104,
        },
        {
          name: '天语k-touchl920',
          value: 0.0103,
        },
        {
          name: '天语T91',
          value: 0.0102,
        },
        {
          name: '天语E616',
          value: 0.009,
        },
        {
          name: '天语W806',
          value: 0.0085,
        },
        {
          name: '天语U86',
          value: 0.0075,
        },
        {
          name: '天语C986T',
          value: 0.0066,
        },
        {
          name: '天语NibiruH',
          value: 0.0065,
        },
        {
          name: '天语L810',
          value: 0.0062,
        },
        {
          name: '天语K-TouchL820c',
          value: 0.006,
        },
        {
          name: '天语T621',
          value: 0.006,
        },
        {
          name: '天语T780',
          value: 0.0059,
        },
        {
          name: '天语U6',
          value: 0.0058,
        },
        {
          name: '天语S5t',
          value: 0.0056,
        },
        {
          name: '天语K-TouchE99',
          value: 0.0055,
        },
        {
          name: '天语S5',
          value: 0.0053,
        },
        {
          name: '天语W68',
          value: 0.0048,
        },
        {
          name: '天语U81T',
          value: 0.0043,
        },
        {
          name: '天语W700',
          value: 0.0042,
        },
        {
          name: '天语U90',
          value: 0.0042,
        },
        {
          name: '天语W98',
          value: 0.0041,
        },
        {
          name: '天语W70',
          value: 0.0041,
        },
        {
          name: '天语U83t',
          value: 0.0039,
        },
        {
          name: '天语k-toucht85',
          value: 0.0037,
        },
        {
          name: '天语T93',
          value: 0.0036,
        },
        {
          name: '天语U7',
          value: 0.0035,
        },
        {
          name: '天语U2(沃Phone)',
          value: 0.0033,
        },
        {
          name: '天语T6',
          value: 0.0033,
        },
        {
          name: '天语 Touch 3',
          value: 0.0032,
        },
        {
          name: '天语C960t',
          value: 0.0032,
        },
        {
          name: '天语T760',
          value: 0.0031,
        },
        {
          name: '天语W808',
          value: 0.0027,
        },
        {
          name: '天语T780+',
          value: 0.0027,
        },
        {
          name: '天语E88',
          value: 0.0027,
        },
        {
          name: '天语T96',
          value: 0.0026,
        },
        {
          name: '天语E619',
          value: 0.0026,
        },
        {
          name: '天语T580',
          value: 0.0025,
        },
        {
          name: '天语T87',
          value: 0.0025,
        },
        {
          name: '天语T81',
          value: 0.0025,
        },
        {
          name: '天语C988t',
          value: 0.0025,
        },
        {
          name: '天语E780',
          value: 0.0022,
        },
        {
          name: '天语W688',
          value: 0.0021,
        },
        {
          name: '天语E806',
          value: 0.002,
        },
        {
          name: '天语E67',
          value: 0.0019,
        },
        {
          name: '天语W760',
          value: 0.0017,
        },
        {
          name: '其他',
          value: 0.0217,
        },
      ],
    },
    {
      name: 'TCL',
      brand: 'TCL',
      value: 0.3655895764217495,
      children: [
        {
          name: 'TCL P301M',
          value: 0.0787,
        },
        {
          name: 'TCL P331M',
          value: 0.0423,
        },
        {
          name: 'TCL P306C',
          value: 0.0398,
        },
        {
          name: 'TCL p500m',
          value: 0.0206,
        },
        {
          name: 'TCL P520L',
          value: 0.0195,
        },
        {
          name: 'TCL P728M',
          value: 0.016,
        },
        {
          name: 'TCL J636D',
          value: 0.0157,
        },
        {
          name: 'TCL M2M',
          value: 0.0151,
        },
        {
          name: 'TCL s720t',
          value: 0.0138,
        },
        {
          name: 'TCL P518L',
          value: 0.01,
        },
        {
          name: 'TCL P516L',
          value: 0.0081,
        },
        {
          name: 'TCL J738M',
          value: 0.0065,
        },
        {
          name: 'TCL p360w',
          value: 0.0063,
        },
        {
          name: 'TCL J320T',
          value: 0.005,
        },
        {
          name: 'tcl s720t',
          value: 0.0049,
        },
        {
          name: 'TCL S950',
          value: 0.0042,
        },
        {
          name: 'TCL Y910',
          value: 0.0041,
        },
        {
          name: 'TCL J726',
          value: 0.0038,
        },
        {
          name: 'TCL J600T',
          value: 0.0035,
        },
        {
          name: 'TCL W939 翔云',
          value: 0.0029,
        },
        {
          name: 'TCL S950T',
          value: 0.0028,
        },
        {
          name: 'TCL S820',
          value: 0.0025,
        },
        {
          name: 'TCL S600',
          value: 0.0024,
        },
        {
          name: 'TCL J900',
          value: 0.0021,
        },
        {
          name: 'TCL J928',
          value: 0.0021,
        },
        {
          name: 'TCL Y910T',
          value: 0.0019,
        },
        {
          name: 'TCL J620',
          value: 0.0017,
        },
        {
          name: 'TCL W989',
          value: 0.0016,
        },
        {
          name: 'TCL S300T',
          value: 0.0016,
        },
        {
          name: 'TCL A919',
          value: 0.0015,
        },
        {
          name: 'TCL S960T',
          value: 0.0015,
        },
        {
          name: 'TCL J300',
          value: 0.0015,
        },
        {
          name: 'TCL J305T',
          value: 0.0015,
        },
        {
          name: 'TCL J630T',
          value: 0.0015,
        },
        {
          name: 'TCL S500',
          value: 0.0014,
        },
        {
          name: 'TCL J210c',
          value: 0.0013,
        },
        {
          name: 'TCL A996',
          value: 0.0012,
        },
        {
          name: 'TCL S800',
          value: 0.0012,
        },
        {
          name: '其他',
          value: 0.0136,
        },
      ],
    },
    {
      name: '努比亚',
      brand: '努比亚',
      value: 0.3532994868802954,
      children: [
        {
          name: '努比亚NX505J',
          value: 0.1058,
        },
        {
          name: '努比亚NX506J',
          value: 0.0798,
        },
        {
          name: '中兴努比亚Z9MINI',
          value: 0.0709,
        },
        {
          name: '努比亚NX507J',
          value: 0.0458,
        },
        {
          name: '努比亚NX403A',
          value: 0.0307,
        },
        {
          name: '努比亚NX503A',
          value: 0.0202,
        },
      ],
    },

    {
      name: '朵唯',
      brand: '朵唯',
      value: 0.2858420985694951,
      children: [
        {
          name: '朵唯S1',
          value: 0.0254,
        },
        {
          name: '朵唯S2Y',
          value: 0.025,
        },
        {
          name: '朵唯T20',
          value: 0.0246,
        },
        {
          name: '朵唯D800',
          value: 0.0207,
        },
        {
          name: '朵唯doovd330',
          value: 0.0206,
        },
        {
          name: '朵唯iEva D500',
          value: 0.0191,
        },
        {
          name: '朵唯L1M',
          value: 0.0183,
        },
        {
          name: '朵唯iSuper S2',
          value: 0.0141,
        },
        {
          name: '朵唯D360',
          value: 0.0112,
        },
        {
          name: '朵唯L1',
          value: 0.0111,
        },
        {
          name: '朵唯DOOV D910',
          value: 0.0111,
        },
        {
          name: '朵唯D350',
          value: 0.0111,
        },
        {
          name: '朵唯T35',
          value: 0.011,
        },
        {
          name: '朵唯iSuper S3',
          value: 0.0092,
        },
        {
          name: '朵唯s2l',
          value: 0.0091,
        },
        {
          name: '朵唯i1314',
          value: 0.008,
        },
        {
          name: '朵唯iEva D50',
          value: 0.0046,
        },
        {
          name: '朵唯D8',
          value: 0.0038,
        },
        {
          name: '朵唯D10',
          value: 0.0035,
        },
        {
          name: '朵唯iEva D7',
          value: 0.0029,
        },
        {
          name: '朵唯iEva D3',
          value: 0.0028,
        },
        {
          name: '朵唯D30',
          value: 0.0027,
        },
        {
          name: '朵唯iEva D9',
          value: 0.0026,
        },
        {
          name: '朵唯iEva D900',
          value: 0.0019,
        },
        {
          name: '朵唯D920',
          value: 0.0017,
        },
        {
          name: '其他',
          value: 0.0097,
        },
      ],
    },
    {
      name: '全志',
      brand: '全志',
      value: 0.27148714077502867,
      children: [
        {
          name: 'SoftwinerEvb',
          value: 0.2714,
        },
        {
          name: '其他',
          value: 0.0001,
        },
      ],
    },
    {
      name: '摩托罗拉',
      brand: '摩托罗拉',
      value: 0.2629327830198232,
      children: [
        {
          name: '摩托罗拉Atrix 4G',
          value: 0.0308,
        },
        {
          name: '摩托罗拉K1',
          value: 0.0296,
        },
        {
          name: '摩托罗拉Defy',
          value: 0.0204,
        },
        {
          name: '摩托罗拉 XT685 锋丽',
          value: 0.013,
        },
        {
          name: '摩托罗拉Defy+',
          value: 0.0115,
        },
        {
          name: '摩托罗拉XT910(Droid RAZR/锋芒)',
          value: 0.0104,
        },
        {
          name: '摩托罗拉Droid 4(Milestone 4)',
          value: 0.0093,
        },
        {
          name: '摩托罗拉XT788',
          value: 0.0082,
        },
        {
          name: '摩托罗拉XT531',
          value: 0.0082,
        },
        {
          name: '摩托罗拉MT680',
          value: 0.0076,
        },
        {
          name: '摩托罗拉XT615',
          value: 0.007,
        },
        {
          name: '摩托罗拉XT928(电信版Droid RAZR)',
          value: 0.0064,
        },
        {
          name: '摩托罗拉ME865',
          value: 0.0061,
        },
        {
          name: '摩托罗拉MB855(Photon 4G)',
          value: 0.0055,
        },
        {
          name: '摩托罗拉XT865(Droid Bionic)',
          value: 0.0045,
        },
        {
          name: '摩托罗拉MT917(移动Droid RAZR)',
          value: 0.0045,
        },
        {
          name: '摩托罗拉MT788',
          value: 0.0041,
        },
        {
          name: '摩托罗拉ROKR U9',
          value: 0.0035,
        },
        {
          name: '摩托罗拉XT390',
          value: 0.0031,
        },
        {
          name: '摩托罗拉MT870',
          value: 0.003,
        },
        {
          name: '摩托罗拉XT912(Droid RAZR)',
          value: 0.003,
        },
        {
          name: '摩托罗拉XT882',
          value: 0.0029,
        },
        {
          name: '摩托罗拉Q8',
          value: 0.0028,
        },
        {
          name: '摩托罗拉MT887(RAZR V移动版)',
          value: 0.0028,
        },
        {
          name: '摩托罗拉ME811(Droid X)',
          value: 0.0028,
        },
        {
          name: '摩托罗拉XT800',
          value: 0.0027,
        },
        {
          name: '摩托罗拉Defy XT',
          value: 0.0026,
        },
        {
          name: '摩托罗拉MOTO G',
          value: 0.0026,
        },
        {
          name: '摩托罗拉DROID RAZR M',
          value: 0.0026,
        },
        {
          name: '摩托罗拉XT885',
          value: 0.0025,
        },
        {
          name: '摩托罗拉ROKR Z6',
          value: 0.0024,
        },
        {
          name: '摩托罗拉MB886',
          value: 0.0023,
        },
        {
          name: '摩托罗拉MB865',
          value: 0.0021,
        },
        {
          name: '摩托罗拉XT536',
          value: 0.0021,
        },
        {
          name: '摩托罗拉Moto G',
          value: 0.0021,
        },
        {
          name: '摩托罗拉XT550',
          value: 0.0016,
        },
        {
          name: '摩托罗拉XT316',
          value: 0.0016,
        },
        {
          name: '摩托罗拉Milestone 2',
          value: 0.0015,
        },
        {
          name: '摩托罗拉XT702(milestone)',
          value: 0.0014,
        },
        {
          name: '摩托罗拉Q9',
          value: 0.0014,
        },
        {
          name: '摩托罗拉XOOM MZ606',
          value: 0.0014,
        },
        {
          name: '摩托罗拉Droid X2',
          value: 0.0013,
        },
        {
          name: '摩托罗拉MB200(CLIQ/DEXT)',
          value: 0.001,
        },
        {
          name: '摩托罗拉XOOM',
          value: 0.001,
        },
        {
          name: '摩托罗拉Defy Mini',
          value: 0.001,
        },
        {
          name: '摩托罗拉Droid 2 Global',
          value: 0.001,
        },
        {
          name: '摩托罗拉XT681(锋丽)',
          value: 0.001,
        },
        {
          name: '摩托罗拉XT889(RAZR V电信版)',
          value: 0.0009,
        },
        {
          name: '摩托罗拉XT883(Droid 3电信版)',
          value: 0.0009,
        },
        {
          name: '摩托罗拉MT620',
          value: 0.0008,
        },
        {
          name: '其他',
          value: 0.0098,
        },
      ],
    },
    {
      name: '台电',
      brand: '台电',
      value: 0.12471093194559665,
      children: [
        {
          name: '台电A11',
          value: 0.0975,
        },
        {
          name: '台电平板电脑CPU核心型号',
          value: 0.0074,
        },
        {
          name: '台电P98HD',
          value: 0.0048,
        },
        {
          name: '台电P85',
          value: 0.0029,
        },
        {
          name: '台电P89mini',
          value: 0.0027,
        },
        {
          name: '台电P88',
          value: 0.0017,
        },
        {
          name: '台电A10',
          value: 0.0015,
        },
        {
          name: '台电P85HD',
          value: 0.0013,
        },
        {
          name: '台电P76E',
          value: 0.001,
        },
        {
          name: '其他',
          value: 0.004,
        },
      ],
    },
    {
      name: '亿通',
      brand: '亿通',
      value: 0.10419118414101976,
      children: [
        {
          name: '亿通 P2',
          value: 0.032,
        },
        {
          name: '亿通P1',
          value: 0.0132,
        },
        {
          name: '亿通etonp3',
          value: 0.0085,
        },
        {
          name: '亿通T890',
          value: 0.0077,
        },
        {
          name: '亿通D520',
          value: 0.0067,
        },
        {
          name: '亿通T730',
          value: 0.0066,
        },
        {
          name: '亿通i6',
          value: 0.0041,
        },
        {
          name: '亿通T900',
          value: 0.0039,
        },
        {
          name: '亿通T860',
          value: 0.0036,
        },
        {
          name: '亿通T820',
          value: 0.0034,
        },
        {
          name: '亿通ETON T701',
          value: 0.0028,
        },
        {
          name: '亿通T730D',
          value: 0.0024,
        },
        {
          name: '亿通T800',
          value: 0.0024,
        },
        {
          name: '亿通T710P',
          value: 0.0021,
        },
        {
          name: '亿通T770',
          value: 0.0013,
        },
        {
          name: '其他',
          value: 0.0034,
        },
      ],
    },
    {
      name: '索爱',
      brand: '索爱',
      value: 0.09537400656131492,
      children: [
        {
          name: '索爱K220',
          value: 0.0495,
        },
        {
          name: '索爱l39u',
          value: 0.0405,
        },
        {
          name: '索爱X11',
          value: 0.0023,
        },
        {
          name: '其他',
          value: 0.0031,
        },
      ],
    },
    {
      name: '诺基亚',
      brand: '诺基亚',
      value: 0.08523811701116615,
      children: [
        {
          name: 'Nokia X',
          value: 0.032,
        },
        {
          name: '诺基亚N9',
          value: 0.0264,
        },
        {
          name: '诺基亚XL 4G',
          value: 0.0223,
        },
        {
          name: '诺基亚Lumia800',
          value: 0.0043,
        },
        {
          name: '其他',
          value: 0.0003,
        },
      ],
    },
    {
      name: '中国移动',
      brand: '中国移动',
      value: 0.0735289087855897,
      children: [
        {
          name: '中国移动M811',
          value: 0.0512,
        },
        {
          name: '中国移动M601',
          value: 0.0223,
        },
      ],
    },
    {
      name: '英菲克',
      brand: '英菲克',
      value: 0.06905118353077373,
      children: [
        {
          name: '英菲克i9h',
          value: 0.0691,
        },
      ],
    },
    {
      name: '优购',
      brand: '优购',
      value: 0.06014624933158708,
      children: [
        {
          name: '优购Q8',
          value: 0.0473,
        },
        {
          name: '优购Q3',
          value: 0.0069,
        },
        {
          name: '优购Q7',
          value: 0.0042,
        },
        {
          name: '其他',
          value: 0.0017,
        },
      ],
    },
    {
      name: '欧博信',
      brand: '优购',
      value: 0.058413618639253956,
      children: [
        {
          name: '欧博信IVO6655',
          value: 0.0109,
        },
        {
          name: '欧博信iVO6600',
          value: 0.0077,
        },
        {
          name: '欧博信D1',
          value: 0.0074,
        },
        {
          name: '欧博信IVO6622',
          value: 0.0061,
        },
        {
          name: '欧博信IVO6688',
          value: 0.0055,
        },
        {
          name: '欧博信iVO8800',
          value: 0.0053,
        },
        {
          name: '欧博信ido5300',
          value: 0.0044,
        },
        {
          name: '欧博信IVO6666',
          value: 0.0036,
        },
        {
          name: '欧博信IDO5300',
          value: 0.0025,
        },
        {
          name: '欧博信iMO1000',
          value: 0.0018,
        },
        {
          name: '欧博信IVO6633',
          value: 0.001,
        },
        {
          name: '其他',
          value: 0.0022,
        },
      ],
    },
    {
      name: '小辣椒',
      brand: '小辣椒',
      value: 0.05552755094316764,
      children: [
        {
          name: '小辣椒红辣椒',
          value: 0.0196,
        },
        {
          name: '小辣椒 la2-l ',
          value: 0.009,
        },
        {
          name: '小辣椒la2-t1手',
          value: 0.0088,
        },
        {
          name: '小辣椒LA-M1',
          value: 0.0086,
        },
        {
          name: '小辣椒LA-Q1',
          value: 0.0042,
        },
        {
          name: '小辣椒LA-M2',
          value: 0.0032,
        },
        {
          name: '其他',
          value: 0.0022,
        },
      ],
    },
    {
      name: '优米',
      brand: '优米',
      value: 0.05544406964617341,
      children: [
        {
          name: '优米UIMI4',
          value: 0.0271,
        },
        {
          name: '优米UIMI3',
          value: 0.0146,
        },
        {
          name: '优米R1',
          value: 0.0062,
        },
        {
          name: '优米UMI3',
          value: 0.0056,
        },
        {
          name: '其他',
          value: 0.0019,
        },
      ],
    },
    {
      name: '三普',
      brand: '三普',
      value: 0.054723565298530466,
      children: [
        {
          name: '三普F307',
          value: 0.0275,
        },
        {
          name: '三普OK333',
          value: 0.0255,
        },
        {
          name: '其他',
          value: 0.0018,
        },
      ],
    },
    {
      name: '昂达',
      brand: '昂达',
      value: 0.05091357791118184,
      children: [
        {
          name: '昂达MID-VI10',
          value: 0.0136,
        },
        {
          name: '昂达MID VI10',
          value: 0.0088,
        },
        {
          name: '昂达V701',
          value: 0.0065,
        },
        {
          name: '昂达V801score4',
          value: 0.0041,
        },
        {
          name: '昂达',
          value: 0.003,
        },
        {
          name: '昂达V972',
          value: 0.0026,
        },
        {
          name: '昂达V975',
          value: 0.0021,
        },
        {
          name: '其他',
          value: 0.0039,
        },
        {
          name: '昂达V973',
          value: 0.0016,
        },
        {
          name: '昂达V819',
          value: 0.0015,
        },
        {
          name: '昂达V812',
          value: 0.0012,
        },
        {
          name: '昂达V811',
          value: 0.0011,
        },
        {
          name: '昂达V818 mini',
          value: 0.0009,
        },
      ],
    },
    {
      name: '海尔',
      brand: '海尔',
      value: 0.049536249019263526,
      children: [
        {
          name: '海尔HT-I860',
          value: 0.0067,
        },
        {
          name: '海尔hl-6170t',
          value: 0.0065,
        },
        {
          name: '海尔HT-I717',
          value: 0.0064,
        },
        {
          name: '海尔HT-I600',
          value: 0.0055,
        },
        {
          name: '海尔I857',
          value: 0.0048,
        },
        {
          name: '海尔I710',
          value: 0.0042,
        },
        {
          name: '海尔HW-W910',
          value: 0.0042,
        },
        {
          name: '海尔HT-I700',
          value: 0.0033,
        },
        {
          name: '海尔I619',
          value: 0.0022,
        },
        {
          name: '海尔I617',
          value: 0.0021,
        },
        {
          name: '海尔HT-I756',
          value: 0.0012,
        },
        {
          name: '海尔HW-W718',
          value: 0.001,
        },
        {
          name: '其他',
          value: 0.0015,
        },
      ],
    },
    {
      name: '金鹏',
      brand: '金鹏',
      value: 0.0465587119236404,
      children: [
        {
          name: '金鹏 A0001',
          value: 0.0466,
        },
      ],
    },
  ]

  // 我们用 insert-css 演示引入自定义样式
  // 推荐将样式添加到自己的样式文件中
  // 若拷贝官方代码，别忘了 npm install insert-css
  //   insertCss(`
  //     .container{
  //       padding: 16px 0px;
  //       width: 160px;
  //       display: flex;
  //       flex-direction: column;
  //     }
  //     .title{
  //       font-weight: bold;
  //     }
  //     .tooltip-item{
  //       margin-top: 12px;
  //       display: flex;
  //       width: 100%;
  //       justify-content: space-between;
  //     }

  //   `)
  const data = {
    name: 'root',
    children: fetchData,
  }
  const config = {
    data,
    colorField: 'brand',
    // 为矩形树图增加缩放,拖拽交互
    interactions: [
      {
        type: 'view-zoom',
      },
      {
        type: 'drag-move',
      },
    ],
    tooltip: {
      follow: true,
      enterable: true,
      offset: 5,
      customContent: (value, items) => {
        if (!items || items.length <= 0) return
        const { data: itemData } = items[0]
        const parent = itemData.path[1]
        const root = itemData.path[itemData.path.length - 1]
        return (
          `<div class='container'>` +
          `<div class='title'>${itemData.name}</div>` +
          `<div class='tooltip-item'><span>销量</span><span>${itemData.value}</span></div>` +
          `<div class='tooltip-item'><span>品牌</span><span>${itemData.brand}</span></div>` +
          `<div class='tooltip-item'><span>品牌占比</span><span>${(
            (itemData.value / parent.value) *
            100
          ).toFixed(2)}%</span></div>` +
          `<div class='tooltip-item'><span>市场占比</span><span>${(
            (itemData.value / root.value) *
            100
          ).toFixed(2)}%</span></div>` +
          `</div>`
        )
      },
    },
  }

  return <Treemap {...config} />
}

import { Pair } from '@pancakeswap/sdk'
import { serializeTokens, mainnetTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 251,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: Pair.getAddress(mainnetTokens.cake, mainnetTokens.wbnb),
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.busd, mainnetTokens.wbnb),
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  {
    pid: 449,
    lpSymbol: 'BP-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.bp, mainnetTokens.wbnb),
    },
    token: serializedTokens.bp,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 454,
    lpSymbol: 'BSCDEFI-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.bscdefi, mainnetTokens.wbnb),
    },
    token: serializedTokens.bscdefi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 453,
    lpSymbol: 'QBT-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.qbt, mainnetTokens.wbnb),
    },
    token: serializedTokens.qbt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 452,
    lpSymbol: 'NAOS-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.naos, mainnetTokens.wbnb),
    },
    token: serializedTokens.naos,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 451,
    lpSymbol: 'PHA-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.pha, mainnetTokens.busd),
    },
    token: serializedTokens.pha,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 314,
    lpSymbol: 'BEL-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.bel, mainnetTokens.wbnb),
    },
    token: serializedTokens.bel,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 446,
    lpSymbol: 'BMON-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.bmon, mainnetTokens.wbnb),
    },
    token: serializedTokens.bmon,
    quoteToken: serializedTokens.busd,
    isCommunity: true,
  },
  {
    pid: 447,
    lpSymbol: 'GNT-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.gnt, mainnetTokens.wbnb),
    },
    token: serializedTokens.gnt,
    quoteToken: serializedTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 450,
    lpSymbol: 'SFUND-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.sfund, mainnetTokens.wbnb),
    },
    token: serializedTokens.sfund,
    quoteToken: serializedTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 448,
    lpSymbol: 'RUSD-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.rusd, mainnetTokens.busd),
    },
    token: serializedTokens.rusd,
    quoteToken: serializedTokens.busd,
    isCommunity: true,
  },
  {
    pid: 317,
    lpSymbol: 'RAMP-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.ramp, mainnetTokens.busd),
    },
    token: serializedTokens.ramp,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 445,
    lpSymbol: 'POTS-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.pots, mainnetTokens.busd),
    },
    token: serializedTokens.pots,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 397,
    lpSymbol: 'TUSD-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.tusd, mainnetTokens.busd),
    },
    token: serializedTokens.tusd,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 443,
    lpSymbol: 'BTT-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.btt, mainnetTokens.busd),
    },
    token: serializedTokens.btt,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 442,
    lpSymbol: 'TRX-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.trx, mainnetTokens.busd),
    },
    token: serializedTokens.trx,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 441,
    lpSymbol: 'WIN-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.win, mainnetTokens.busd),
    },
    token: serializedTokens.win,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 436,
    lpSymbol: 'BABYCAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.babycake, mainnetTokens.wbnb),
    },
    token: serializedTokens.babycake,
    quoteToken: serializedTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 437,
    lpSymbol: 'BMON-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3C2b7B578Dd2175A1c3524Aa0D515106282Bf108',
    },
    token: serializedTokens.bmon,
    quoteToken: serializedTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 440,
    lpSymbol: 'HERO-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.hero, mainnetTokens.wbnb),
    },
    token: serializedTokens.hero,
    quoteToken: serializedTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 438,
    lpSymbol: 'WSG-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.wsg, mainnetTokens.wbnb),
    },
    token: serializedTokens.wsg,
    quoteToken: serializedTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 439,
    lpSymbol: 'MCRN-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.mcrn, mainnetTokens.wbnb),
    },
    token: serializedTokens.mcrn,
    quoteToken: serializedTokens.wbnb,
    isCommunity: true,
  },
  {
    pid: 435,
    lpSymbol: 'REVV-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.revv, mainnetTokens.wbnb),
    },
    token: serializedTokens.revv,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 367,
    lpSymbol: 'BTT-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.btt, mainnetTokens.wbnb),
    },
    token: serializedTokens.btt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 434,
    lpSymbol: 'SKILL-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.skill, mainnetTokens.wbnb),
    },
    token: serializedTokens.skill,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 369,
    lpSymbol: 'WIN-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.win, mainnetTokens.wbnb),
    },
    token: serializedTokens.win,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 433,
    lpSymbol: 'IF-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.if, mainnetTokens.busd),
    },
    token: serializedTokens.if,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 432,
    lpSymbol: 'SPS-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.sps, mainnetTokens.wbnb),
    },
    token: serializedTokens.sps,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 431,
    lpSymbol: 'C98-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.c98, mainnetTokens.wbnb),
    },
    token: serializedTokens.c98,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 430,
    lpSymbol: 'AXS-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.axs, mainnetTokens.wbnb),
    },
    token: serializedTokens.axs,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 379,
    lpSymbol: 'PMON-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.pmon, mainnetTokens.busd),
    },
    token: serializedTokens.pmon,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 368,
    lpSymbol: 'TRX-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.trx, mainnetTokens.wbnb),
    },
    token: serializedTokens.trx,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 429,
    lpSymbol: 'CHESS-USDC LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.chess, mainnetTokens.usdc),
    },
    token: serializedTokens.chess,
    quoteToken: serializedTokens.usdc,
  },
  {
    pid: 428,
    lpSymbol: 'TITAN-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.titan, mainnetTokens.busd),
    },
    token: serializedTokens.titan,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 427,
    lpSymbol: 'ONE-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.harmony, mainnetTokens.wbnb),
    },
    token: serializedTokens.harmony,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 426,
    lpSymbol: 'MASK-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.mask, mainnetTokens.wbnb),
    },
    token: serializedTokens.mask,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 425,
    lpSymbol: 'DVI-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.dvi, mainnetTokens.wbnb),
    },
    token: serializedTokens.dvi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 339,
    lpSymbol: 'GUM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x28Ea5894D4DBbE90bB58eE3BAB2869387d711c87',
    },
    token: serializedTokens.gum,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 424,
    lpSymbol: 'ADX-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.adx, mainnetTokens.busd),
    },
    token: serializedTokens.adx,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 423,
    lpSymbol: 'USDC-USDT LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.usdc, mainnetTokens.usdt),
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 422,
    lpSymbol: 'CAKE-USDT LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.cake, mainnetTokens.usdt),
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 357,
    lpSymbol: 'SUTER-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.suter, mainnetTokens.wbnb),
    },
    token: serializedTokens.suter,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 421,
    lpSymbol: 'BSCPAD-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.bscpad, mainnetTokens.wbnb),
    },
    token: serializedTokens.bscpad,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 420,
    lpSymbol: 'RABBIT-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.rabbit, mainnetTokens.wbnb),
    },
    token: serializedTokens.rabbit,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 419,
    lpSymbol: 'WAULTx-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.waultx, mainnetTokens.wbnb),
    },
    token: serializedTokens.waultx,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 418,
    lpSymbol: 'WEX-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.wex, mainnetTokens.wbnb),
    },
    token: serializedTokens.wex,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 417,
    lpSymbol: 'FORM-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.form, mainnetTokens.busd),
    },
    token: serializedTokens.form,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 416,
    lpSymbol: 'ORBS-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.orbs, mainnetTokens.busd),
    },
    token: serializedTokens.orbs,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 415,
    lpSymbol: 'DG-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.$dg, mainnetTokens.wbnb),
    },
    token: serializedTokens.$dg,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 414,
    lpSymbol: 'WOO-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.woo, mainnetTokens.wbnb),
    },
    token: serializedTokens.woo,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 413,
    lpSymbol: 'HTB-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.htb, mainnetTokens.wbnb),
    },
    token: serializedTokens.htb,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 351,
    lpSymbol: 'JGN-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.jgn, mainnetTokens.wbnb),
    },
    token: serializedTokens.jgn,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 337,
    lpSymbol: 'DFT-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.dft, mainnetTokens.wbnb),
    },
    token: serializedTokens.dft,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 412,
    lpSymbol: 'HAI-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.hai, mainnetTokens.wbnb),
    },
    token: serializedTokens.hai,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 411,
    lpSymbol: 'O3-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.o3, mainnetTokens.busd),
    },
    token: serializedTokens.o3,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 410,
    lpSymbol: 'AMPL-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.ampl, mainnetTokens.busd),
    },
    token: serializedTokens.ampl,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 343,
    lpSymbol: 'ODDZ-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.oddz, mainnetTokens.wbnb),
    },
    token: serializedTokens.oddz,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 409,
    lpSymbol: 'ETH-USDC LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.eth, mainnetTokens.usdc),
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.usdc,
  },
  {
    pid: 408,
    lpSymbol: 'BTCB-ETH LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.btcb, mainnetTokens.eth),
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.eth,
  },
  {
    pid: 347,
    lpSymbol: 'BONDLY-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.bondly, mainnetTokens.wbnb),
    },
    token: serializedTokens.bondly,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 407,
    lpSymbol: 'MARSH-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.marsh, mainnetTokens.wbnb),
    },
    token: serializedTokens.marsh,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 406,
    lpSymbol: 'BORING-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.boring, mainnetTokens.wbnb),
    },
    token: serializedTokens.boring,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 405,
    lpSymbol: 'MBOX-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.mbox, mainnetTokens.wbnb),
    },
    token: serializedTokens.mbox,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 404,
    lpSymbol: 'ATA-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.ata, mainnetTokens.wbnb),
    },
    token: serializedTokens.ata,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 403,
    lpSymbol: 'MX-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.mx, mainnetTokens.busd),
    },
    token: serializedTokens.mx,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 402,
    lpSymbol: 'bCFX-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.bcfx, mainnetTokens.busd),
    },
    token: serializedTokens.bcfx,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 401,
    lpSymbol: 'QKC-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.qkc, mainnetTokens.busd),
    },
    token: serializedTokens.qkc,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 400,
    lpSymbol: 'KTN-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.ktn, mainnetTokens.wbnb),
    },
    token: serializedTokens.ktn,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 399,
    lpSymbol: 'MTRG-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.mtrg, mainnetTokens.busd),
    },
    token: serializedTokens.mtrg,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 398,
    lpSymbol: 'SWG-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.swg, mainnetTokens.wbnb),
    },
    token: serializedTokens.swg,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 396,
    lpSymbol: 'VRT-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.vrt, mainnetTokens.wbnb),
    },
    token: serializedTokens.vrt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 395,
    lpSymbol: 'EZ-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.ez, mainnetTokens.wbnb),
    },
    token: serializedTokens.ez,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 394,
    lpSymbol: 'KALM-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.kalm, mainnetTokens.wbnb),
    },
    token: serializedTokens.kalm,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 393,
    lpSymbol: 'pOPEN-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.popen, mainnetTokens.wbnb),
    },
    token: serializedTokens.popen,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 335,
    lpSymbol: 'LIEN-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.lien, mainnetTokens.wbnb),
    },
    token: serializedTokens.lien,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 392,
    lpSymbol: 'WELL-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.well, mainnetTokens.busd),
    },
    token: serializedTokens.well,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 391,
    lpSymbol: 'DERI-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.deri, mainnetTokens.busd),
    },
    token: serializedTokens.deri,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 390,
    lpSymbol: 'CHR-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.chr, mainnetTokens.busd),
    },
    token: serializedTokens.chr,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 389,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.cake, mainnetTokens.busd),
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 388,
    lpSymbol: 'CYC-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.cyc, mainnetTokens.wbnb),
    },
    token: serializedTokens.cyc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 387,
    lpSymbol: 'XEND-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.xend, mainnetTokens.wbnb),
    },
    token: serializedTokens.xend,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 296,
    lpSymbol: 'HGET-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.hget, mainnetTokens.wbnb),
    },
    token: serializedTokens.hget,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 386,
    lpSymbol: 'HOTCROSS-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.hotcross, mainnetTokens.wbnb),
    },
    token: serializedTokens.hotcross,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 385,
    lpSymbol: 'RFOX-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.rfox, mainnetTokens.wbnb),
    },
    token: serializedTokens.rfox,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 384,
    lpSymbol: 'WMASS-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.wmass, mainnetTokens.busd),
    },
    token: serializedTokens.wmass,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 383,
    lpSymbol: 'UBXT-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.ubxt, mainnetTokens.busd),
    },
    token: serializedTokens.ubxt,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 381,
    lpSymbol: 'BTR-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.btr, mainnetTokens.busd),
    },
    token: serializedTokens.btr,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 380,
    lpSymbol: 'τDOGE-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.τdoge, mainnetTokens.wbnb),
    },
    token: serializedTokens.τdoge,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 378,
    lpSymbol: 'ONE-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.one, mainnetTokens.busd),
    },
    token: serializedTokens.one,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 377,
    lpSymbol: 'FINE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xc309a6d2f1537922e06f15aa2eb21caa1b2eedb6',
    },
    token: serializedTokens.fine,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 376,
    lpSymbol: 'DOGE-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.doge, mainnetTokens.wbnb),
    },
    token: serializedTokens.doge,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 310,
    lpSymbol: 'bMXX-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.bmxx, mainnetTokens.wbnb),
    },
    token: serializedTokens.bmxx,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 375,
    lpSymbol: 'OIN-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.oin, mainnetTokens.busd),
    },
    token: serializedTokens.oin,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 374,
    lpSymbol: 'HYFI-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.hyfi, mainnetTokens.wbnb),
    },
    token: serializedTokens.hyfi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 373,
    lpSymbol: 'KUN-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.kun, mainnetTokens.busd),
    },
    token: serializedTokens.kun,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 372,
    lpSymbol: 'KUN-QSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.kun, mainnetTokens.qsd),
    },
    token: serializedTokens.kun,
    quoteToken: serializedTokens.qsd,
  },
  {
    pid: 371,
    lpSymbol: 'MATH-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.math, mainnetTokens.busd),
    },
    token: serializedTokens.math,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 370,
    lpSymbol: 'mCOIN-UST LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.mcoin, mainnetTokens.ust),
    },
    token: serializedTokens.mcoin,
    quoteToken: serializedTokens.ust,
  },
  {
    pid: 366,
    lpSymbol: 'PNT-pBTC LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.pnt, mainnetTokens.pbtc),
    },
    token: serializedTokens.pnt,
    quoteToken: serializedTokens.pbtc,
  },
  {
    pid: 311,
    lpSymbol: 'xMARK-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.xmark, mainnetTokens.busd),
    },
    token: serializedTokens.xmark,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 365,
    lpSymbol: 'BTCB-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.btcb, mainnetTokens.busd),
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 364,
    lpSymbol: 'LMT-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.lmt, mainnetTokens.wbnb),
    },
    token: serializedTokens.lmt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 363,
    lpSymbol: 'DFD-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.dfd, mainnetTokens.busd),
    },
    token: serializedTokens.dfd,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 362,
    lpSymbol: 'ALPACA-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.alpaca, mainnetTokens.busd),
    },
    token: serializedTokens.alpaca,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 361,
    lpSymbol: 'τBTC-BTCB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.τbtc, mainnetTokens.btcb),
    },
    token: serializedTokens.τbtc,
    quoteToken: serializedTokens.btcb,
  },
  {
    pid: 304,
    lpSymbol: 'SWINGBY-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.swingby, mainnetTokens.wbnb),
    },
    token: serializedTokens.swingby,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 360,
    lpSymbol: 'XED-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.xed, mainnetTokens.wbnb),
    },
    token: serializedTokens.xed,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 359,
    lpSymbol: 'HAKKA-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.hakka, mainnetTokens.busd),
    },
    token: serializedTokens.hakka,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 358,
    lpSymbol: 'CGG-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.cgg, mainnetTokens.wbnb),
    },
    token: serializedTokens.cgg,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 356,
    lpSymbol: 'bROOBEE-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.broobee, mainnetTokens.wbnb),
    },
    token: serializedTokens.broobee,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 355,
    lpSymbol: 'HZN-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.hzn, mainnetTokens.wbnb),
    },
    token: serializedTokens.hzn,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 354,
    lpSymbol: 'ALPA-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.alpa, mainnetTokens.wbnb),
    },
    token: serializedTokens.alpa,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 353,
    lpSymbol: 'PERL-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.perl, mainnetTokens.wbnb),
    },
    token: serializedTokens.perl,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 352,
    lpSymbol: 'TLM-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.tlm, mainnetTokens.wbnb),
    },
    token: serializedTokens.tlm,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 350,
    lpSymbol: 'EPS-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.eps, mainnetTokens.wbnb),
    },
    token: serializedTokens.eps,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 349,
    lpSymbol: 'ARPA-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.arpa, mainnetTokens.wbnb),
    },
    token: serializedTokens.arpa,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 348,
    lpSymbol: 'ITAM-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.itam, mainnetTokens.wbnb),
    },
    token: serializedTokens.itam,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 346,
    lpSymbol: 'TKO-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.tko, mainnetTokens.wbnb),
    },
    token: serializedTokens.tko,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 345,
    lpSymbol: 'APYS-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.apys, mainnetTokens.wbnb),
    },
    token: serializedTokens.apys,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 344,
    lpSymbol: 'HOO-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.hoo, mainnetTokens.busd),
    },
    token: serializedTokens.hoo,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 342,
    lpSymbol: 'EASY-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.easy, mainnetTokens.wbnb),
    },
    token: serializedTokens.easy,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 341,
    lpSymbol: 'NRV-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.nrv, mainnetTokens.wbnb),
    },
    token: serializedTokens.nrv,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 340,
    lpSymbol: 'DEGO-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.dego, mainnetTokens.wbnb),
    },
    token: serializedTokens.dego,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 338,
    lpSymbol: 'pBTC-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.pbtc, mainnetTokens.wbnb),
    },
    token: serializedTokens.pbtc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 336,
    lpSymbol: 'SWTH-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.swth, mainnetTokens.wbnb),
    },
    token: serializedTokens.swth,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 334,
    lpSymbol: 'ZIL-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.zil, mainnetTokens.wbnb),
    },
    token: serializedTokens.zil,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 333,
    lpSymbol: 'pCWS-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.pcws, mainnetTokens.wbnb),
    },
    token: serializedTokens.pcws,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 332,
    lpSymbol: 'bBADGER-BTCB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.bbadger, mainnetTokens.btcb),
    },
    token: serializedTokens.bbadger,
    quoteToken: serializedTokens.btcb,
  },
  {
    pid: 331,
    lpSymbol: 'bDIGG-BTCB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.bdigg, mainnetTokens.btcb),
    },
    token: serializedTokens.bdigg,
    quoteToken: serializedTokens.btcb,
  },
  {
    pid: 330,
    lpSymbol: 'LTO-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.lto, mainnetTokens.wbnb),
    },
    token: serializedTokens.lto,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 329,
    lpSymbol: 'MIR-UST LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.mir, mainnetTokens.ust),
    },
    token: serializedTokens.mir,
    quoteToken: serializedTokens.ust,
  },
  {
    pid: 328,
    lpSymbol: 'TRADE-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.trade, mainnetTokens.wbnb),
    },
    token: serializedTokens.trade,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 327,
    lpSymbol: 'DUSK-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.dusk, mainnetTokens.wbnb),
    },
    token: serializedTokens.dusk,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 326,
    lpSymbol: 'BIFI-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.bifi, mainnetTokens.wbnb),
    },
    token: serializedTokens.bifi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 325,
    lpSymbol: 'TXL-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.txl, mainnetTokens.busd),
    },
    token: serializedTokens.txl,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 324,
    lpSymbol: 'COS-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.cos, mainnetTokens.wbnb),
    },
    token: serializedTokens.cos,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 323,
    lpSymbol: 'BUNNY-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.bunny, mainnetTokens.wbnb),
    },
    token: serializedTokens.bunny,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 322,
    lpSymbol: 'ALICE-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.alice, mainnetTokens.wbnb),
    },
    token: serializedTokens.alice,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 321,
    lpSymbol: 'FOR-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.for, mainnetTokens.busd),
    },
    token: serializedTokens.for,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 320,
    lpSymbol: 'BUX-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.bux, mainnetTokens.wbnb),
    },
    token: serializedTokens.bux,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 319,
    lpSymbol: 'NULS-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.nuls, mainnetTokens.busd),
    },
    token: serializedTokens.nuls,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 318,
    lpSymbol: 'BELT-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.belt, mainnetTokens.wbnb),
    },
    token: serializedTokens.belt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 316,
    lpSymbol: 'BFI-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.bfi, mainnetTokens.wbnb),
    },
    token: serializedTokens.bfi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 315,
    lpSymbol: 'DEXE-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.dexe, mainnetTokens.busd),
    },
    token: serializedTokens.dexe,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 313,
    lpSymbol: 'TPT-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.tpt, mainnetTokens.busd),
    },
    token: serializedTokens.tpt,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 312,
    lpSymbol: 'WATCH-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.watch, mainnetTokens.wbnb),
    },
    token: serializedTokens.watch,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 309,
    lpSymbol: 'IOTX-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.iotx, mainnetTokens.busd),
    },
    token: serializedTokens.iotx,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 308,
    lpSymbol: 'BOR-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.bor, mainnetTokens.wbnb),
    },
    token: serializedTokens.bor,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 307,
    lpSymbol: 'bOPEN-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.bopen, mainnetTokens.wbnb),
    },
    token: serializedTokens.bopen,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 306,
    lpSymbol: 'SUSHI-ETH LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.sushi, mainnetTokens.eth),
    },
    token: serializedTokens.sushi,
    quoteToken: serializedTokens.eth,
  },
  {
    pid: 305,
    lpSymbol: 'DODO-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.dodo, mainnetTokens.wbnb),
    },
    token: serializedTokens.dodo,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 303,
    lpSymbol: 'BRY-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.bry, mainnetTokens.wbnb),
    },
    token: serializedTokens.bry,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 302,
    lpSymbol: 'ZEE-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.zee, mainnetTokens.wbnb),
    },
    token: serializedTokens.zee,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 301,
    lpSymbol: 'SWGb-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.swgb, mainnetTokens.wbnb),
    },
    token: serializedTokens.swgb,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 300,
    lpSymbol: 'COMP-ETH LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.comp, mainnetTokens.eth),
    },
    token: serializedTokens.comp,
    quoteToken: serializedTokens.eth,
  },
  {
    pid: 299,
    lpSymbol: 'SFP-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.sfp, mainnetTokens.wbnb),
    },
    token: serializedTokens.sfp,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 298,
    lpSymbol: 'LINA-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.lina, mainnetTokens.busd),
    },
    token: serializedTokens.lina,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 297,
    lpSymbol: 'LIT-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.lit, mainnetTokens.wbnb),
    },
    token: serializedTokens.lit,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 295,
    lpSymbol: 'BDO-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.bdo, mainnetTokens.wbnb),
    },
    token: serializedTokens.bdo,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 294,
    lpSymbol: 'EGLD-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.egld, mainnetTokens.wbnb),
    },
    token: serializedTokens.egld,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 293,
    lpSymbol: 'UST-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.ust, mainnetTokens.busd),
    },
    token: serializedTokens.ust,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 292,
    lpSymbol: 'mAMZN-UST LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.mamzn, mainnetTokens.ust),
    },
    token: serializedTokens.mamzn,
    quoteToken: serializedTokens.ust,
  },
  {
    pid: 291,
    lpSymbol: 'mGOOGL-UST LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.mgoogl, mainnetTokens.ust),
    },
    token: serializedTokens.mgoogl,
    quoteToken: serializedTokens.ust,
  },
  {
    pid: 290,
    lpSymbol: 'mNFLX-UST LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.mnflx, mainnetTokens.ust),
    },
    token: serializedTokens.mnflx,
    quoteToken: serializedTokens.ust,
  },
  {
    pid: 289,
    lpSymbol: 'mTSLA-UST LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.mtsla, mainnetTokens.ust),
    },
    token: serializedTokens.mtsla,
    quoteToken: serializedTokens.ust,
  },
  {
    pid: 288,
    lpSymbol: 'wSOTE-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.wsote, mainnetTokens.wbnb),
    },
    token: serializedTokens.wsote,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 287,
    lpSymbol: 'FRONT-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.front, mainnetTokens.wbnb),
    },
    token: serializedTokens.front,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 286,
    lpSymbol: 'Helmet-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.helmet, mainnetTokens.wbnb),
    },
    token: serializedTokens.helmet,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 285,
    lpSymbol: 'BTCST-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.btcst, mainnetTokens.wbnb),
    },
    token: serializedTokens.btcst,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 284,
    lpSymbol: 'LTC-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.ltc, mainnetTokens.wbnb),
    },
    token: serializedTokens.ltc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 283,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.usdc, mainnetTokens.busd),
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 282,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.dai, mainnetTokens.busd),
    },
    token: serializedTokens.dai,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 281,
    lpSymbol: 'BSCX-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.bscx, mainnetTokens.wbnb),
    },
    token: serializedTokens.bscx,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 280,
    lpSymbol: 'TEN-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.ten, mainnetTokens.wbnb),
    },
    token: serializedTokens.ten,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 279,
    lpSymbol: 'bALBT-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.balbt, mainnetTokens.wbnb),
    },
    token: serializedTokens.balbt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 278,
    lpSymbol: 'REEF-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.reef, mainnetTokens.wbnb),
    },
    token: serializedTokens.reef,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 277,
    lpSymbol: 'Ditto-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.ditto, mainnetTokens.wbnb),
    },
    token: serializedTokens.ditto,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 276,
    lpSymbol: 'VAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.vai, mainnetTokens.busd),
    },
    token: serializedTokens.vai,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 275,
    lpSymbol: 'BLK-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.blink, mainnetTokens.wbnb),
    },
    token: serializedTokens.blink,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 274,
    lpSymbol: 'UNFI-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.unfi, mainnetTokens.wbnb),
    },
    token: serializedTokens.unfi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 273,
    lpSymbol: 'HARD-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.hard, mainnetTokens.wbnb),
    },
    token: serializedTokens.hard,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 272,
    lpSymbol: 'CTK-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.ctk, mainnetTokens.wbnb),
    },
    token: serializedTokens.ctk,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 271,
    lpSymbol: 'SXP-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.sxp, mainnetTokens.wbnb),
    },
    token: serializedTokens.sxp,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 270,
    lpSymbol: 'INJ-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.inj, mainnetTokens.wbnb),
    },
    token: serializedTokens.inj,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 269,
    lpSymbol: 'FIL-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.fil, mainnetTokens.wbnb),
    },
    token: serializedTokens.fil,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 268,
    lpSymbol: 'UNI-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.uni, mainnetTokens.wbnb),
    },
    token: serializedTokens.uni,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 267,
    lpSymbol: 'YFI-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.yfi, mainnetTokens.wbnb),
    },
    token: serializedTokens.yfi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 266,
    lpSymbol: 'ATOM-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.atom, mainnetTokens.wbnb),
    },
    token: serializedTokens.atom,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 265,
    lpSymbol: 'XRP-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.xrp, mainnetTokens.wbnb),
    },
    token: serializedTokens.xrp,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 264,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.usdt, mainnetTokens.wbnb),
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 263,
    lpSymbol: 'ALPHA-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.alpha, mainnetTokens.wbnb),
    },
    token: serializedTokens.alpha,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 262,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.btcb, mainnetTokens.wbnb),
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 261,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.eth, mainnetTokens.wbnb),
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 260,
    lpSymbol: 'XVS-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.xvs, mainnetTokens.wbnb),
    },
    token: serializedTokens.xvs,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 259,
    lpSymbol: 'TWT-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.twt, mainnetTokens.wbnb),
    },
    token: serializedTokens.twt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 258,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.usdt, mainnetTokens.busd),
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 257,
    lpSymbol: 'LINK-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.link, mainnetTokens.wbnb),
    },
    token: serializedTokens.link,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 256,
    lpSymbol: 'EOS-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.eos, mainnetTokens.wbnb),
    },
    token: serializedTokens.eos,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 255,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.dot, mainnetTokens.wbnb),
    },
    token: serializedTokens.dot,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 254,
    lpSymbol: 'BAND-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.band, mainnetTokens.wbnb),
    },
    token: serializedTokens.band,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 253,
    lpSymbol: 'ADA-BNB LP',
    lpAddresses: {
      97: '',
      56: Pair.getAddress(mainnetTokens.ada, mainnetTokens.wbnb),
    },
    token: serializedTokens.ada,
    quoteToken: serializedTokens.wbnb,
  },
  /**
   * V2 farms, set to be removed once unstaked
   */
  {
    pid: 139,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xFB7E9FE9D13561AdA7131Fa746942a14F7dd4Cf6',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 250,
    lpSymbol: 'τBTC-BTCB LP',
    lpAddresses: {
      97: '',
      56: '0xFD09CDbd6A7dCAd8AC47df4F139443a729264763',
    },
    token: serializedTokens.τbtc,
    quoteToken: serializedTokens.btcb,
  },
  {
    pid: 193,
    lpSymbol: 'SWINGBY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xA0e3F72BAFcc5d52F0052a39165FD40D3d4d34Fc',
    },
    token: serializedTokens.swingby,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 249,
    lpSymbol: 'XED-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xBbE20dA99db94Fa1077F1C9A5d256761dAf89C60',
    },
    token: serializedTokens.xed,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 248,
    lpSymbol: 'HAKKA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x9ed1ca73AA8F1ccdc3c3a174E77014f8900411CE',
    },
    token: serializedTokens.hakka,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 247,
    lpSymbol: 'CGG-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xB9aA8B0d67DE546aaa82091065a64B7F1C4B1a1F',
    },
    token: serializedTokens.cgg,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 246,
    lpSymbol: 'SUTER-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6f41c9226fa89a552009c3AC087BA74b83772C52',
    },
    token: serializedTokens.suter,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 245,
    lpSymbol: 'bROOBEE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5Ac5184eA06dE24ce8ED2133f58b4Aa2CEd2dC3b',
    },
    token: serializedTokens.broobee,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 244,
    lpSymbol: 'HZN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF7fcD7e7B3853bf59bCA9183476F218ED07eD3B0',
    },
    token: serializedTokens.hzn,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 243,
    lpSymbol: 'ALPA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xBB41898A3051A6b6D4A36a1c43e906b05799B744',
    },
    token: serializedTokens.alpa,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 242,
    lpSymbol: 'PERL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xB1C2e08A992a619DA570425E78828A8508654f4F',
    },
    token: serializedTokens.perl,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 241,
    lpSymbol: 'TLM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x25f15Cb3D3B3753702E1d5c4E5f6F0720b197843',
    },
    token: serializedTokens.tlm,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 240,
    lpSymbol: 'JGN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8fD5ca41B2B44e4713590584f97c85f9FF59F00D',
    },
    token: serializedTokens.jgn,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 239,
    lpSymbol: 'EPS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x43bc6C256240e657Ad84aFb86825E21B48FEDe78',
    },
    token: serializedTokens.eps,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 238,
    lpSymbol: 'ARPA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xD55e5A7b886aE9657b95641c6A7dc5A662EcAbF3',
    },
    token: serializedTokens.arpa,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 237,
    lpSymbol: 'ITAM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3e78b0eD211a49e263fF9b3F0B410932a021E368',
    },
    token: serializedTokens.itam,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 236,
    lpSymbol: 'BONDLY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2205a6424ec4D74a7588450fB71ffd0C4A3Ead65',
    },
    token: serializedTokens.bondly,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 235,
    lpSymbol: 'TKO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xc43EdF4a7e89160135C2553E9868446fef9C18DD',
    },
    token: serializedTokens.tko,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 234,
    lpSymbol: 'APYS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7A5523f50a80790cAD011167E20bD21056A2f04A',
    },
    token: serializedTokens.apys,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 233,
    lpSymbol: 'HOO-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc12dAD966505443b5aad7b0C55716c13d285B520',
    },
    token: serializedTokens.hoo,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 232,
    lpSymbol: 'ODDZ-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3B0a7d1030bcDFf45ABB7B03C04110FcCc8095BC',
    },
    token: serializedTokens.oddz,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 231,
    lpSymbol: 'EASY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4b0ec41404a7FF59BaE33C8Dc420804c58B7bF24',
    },
    token: serializedTokens.easy,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 230,
    lpSymbol: 'NRV-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x25dea33a42c7775F6945fae22A8fFBfAC9fB22CD',
    },
    token: serializedTokens.nrv,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 229,
    lpSymbol: 'DEGO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6108aBd546AF17D8f7aFAe59EBfb4A01132A11Bb',
    },
    token: serializedTokens.dego,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 228,
    lpSymbol: 'GUM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xA99d1926a3c15DC4Fb83aB3Fafd63B6C3E87CF22',
    },
    token: serializedTokens.gum,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 227,
    lpSymbol: 'pBTC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xaccd6673FFc24cD56B080D71384327f78fD92496',
    },
    token: serializedTokens.pbtc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 226,
    lpSymbol: 'DFT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xe86d075051f20eb8c741007Cb8e262f4519944ee',
    },
    token: serializedTokens.dft,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 225,
    lpSymbol: 'SWTH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4f6dfFc9795d35dc1D92c2a7B23Cb7d6EF190B33',
    },
    token: serializedTokens.swth,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 224,
    lpSymbol: 'LIEN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xbe7BDE4aD1c136038Dc9f57ef94d1d16e6F9CbF7',
    },
    token: serializedTokens.lien,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 223,
    lpSymbol: 'ZIL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xcBDf499db66Df19A66aB48F16C790FF9eE872add',
    },
    token: serializedTokens.zil,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 222,
    lpSymbol: 'pCWS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xe3D941e74141311436F82523817EBaa26462967d',
    },
    token: serializedTokens.pcws,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 221,
    lpSymbol: 'bBADGER-BTCB LP',
    lpAddresses: {
      97: '',
      56: '0x87Ae7b5c43D4e160cDB9427a78BA87B9503ee37b',
    },
    token: serializedTokens.bbadger,
    quoteToken: serializedTokens.btcb,
  },
  {
    pid: 220,
    lpSymbol: 'bDIGG-BTCB LP',
    lpAddresses: {
      97: '',
      56: '0xfbfa92e037e37F946c0105902640914E3aCe6752',
    },
    token: serializedTokens.bdigg,
    quoteToken: serializedTokens.btcb,
  },
  {
    pid: 219,
    lpSymbol: 'LTO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF62e92292772F24EAa6B6B8a105c9FC7B8F31EC5',
    },
    token: serializedTokens.lto,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 218,
    lpSymbol: 'MIR-UST LP',
    lpAddresses: {
      97: '',
      56: '0x905186a70ba3Eb50090d1d0f6914F5460B4DdB40',
    },
    token: serializedTokens.mir,
    quoteToken: serializedTokens.ust,
  },
  {
    pid: 217,
    lpSymbol: 'TRADE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x52fCfB6d91Bcf1F1f6d375D0f6c303688b0E8550',
    },
    token: serializedTokens.trade,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 216,
    lpSymbol: 'DUSK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x69773f622cE228Ca7dEd42D8C34Eba8582e85dcA',
    },
    token: serializedTokens.dusk,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 215,
    lpSymbol: 'BIFI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x01956F08A55e4FF9775bc01aF6ACb09144564837',
    },
    token: serializedTokens.bifi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 214,
    lpSymbol: 'TXL-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x8Ba7eB4056338fd7271E1b7431C8ca3827eF907c',
    },
    token: serializedTokens.txl,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 213,
    lpSymbol: 'COS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xAfB2e729A24629aBdE8E55CEB0e1f899bEe0f70f',
    },
    token: serializedTokens.cos,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 212,
    lpSymbol: 'BUNNY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x283FA8d459Da6e3165B2faF7FA0DD0137503DECf',
    },
    token: serializedTokens.bunny,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 211,
    lpSymbol: 'ALICE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9e1BB5033d47BF8F16FC017CEC0959De7FF00833',
    },
    token: serializedTokens.alice,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 210,
    lpSymbol: 'FOR-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xaBB817B07663521Cf64B006EC9D0FF185b65cfE5',
    },
    token: serializedTokens.for,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 209,
    lpSymbol: 'BUX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7aA4eb5c3bF33e3AD41A47e26b3Bd9b902984610',
    },
    token: serializedTokens.bux,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 208,
    lpSymbol: 'NULS-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xaB46737CAAFbB99999f8b91E4D3C6D4D28E10e05',
    },
    token: serializedTokens.nuls,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 207,
    lpSymbol: 'BELT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x446ff2C0F5350bF2dadD0e0F1AaAA573b362CA6B',
    },
    token: serializedTokens.belt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 206,
    lpSymbol: 'RAMP-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x6ED589e69D1927AC45054cBb6E57877879384d6F',
    },
    token: serializedTokens.ramp,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 205,
    lpSymbol: 'BFI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xFFA2357f1E6f48d74b1c18c363c3Fe58A032405a',
    },
    token: serializedTokens.bfi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 204,
    lpSymbol: 'DEXE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x534b0b0700c0cfF9785852707f07f60E7C0bc07E',
    },
    token: serializedTokens.dexe,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 203,
    lpSymbol: 'BEL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2013265224E3cB6A53C67130F9Fe53Ae36CFcfdd',
    },
    token: serializedTokens.bel,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 202,
    lpSymbol: 'TPT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xC14c2dd21d6aEA3C2068A1F8e58d41D3c28F9288',
    },
    token: serializedTokens.tpt,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 201,
    lpSymbol: 'WATCH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xD5fBfFf5faB9d29f614d9bd50AF9b1356C53049C',
    },
    token: serializedTokens.watch,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 200,
    lpSymbol: 'xMARK-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x601aE41C5a65b2089a6af2CcfaF984896a1f52AD',
    },
    token: serializedTokens.xmark,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 199,
    lpSymbol: 'bMXX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x037d38c7DfF5732DAA5f8C05478Eb75cdf24f42B',
    },
    token: serializedTokens.bmxx,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 198,
    lpSymbol: 'IOTX-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x8503462D0d4D3ce73e857bCC7D0Ef1125B0d66fF',
    },
    token: serializedTokens.iotx,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 197,
    lpSymbol: 'BOR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xE0243Ce3b50bd551168cE6964F178507d0a1acD5',
    },
    token: serializedTokens.bor,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 196,
    lpSymbol: 'bOPEN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xD2FcF98EaeD2c08e9BcA854802C07b93D27913aC',
    },
    token: serializedTokens.bopen,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 195,
    lpSymbol: 'SUSHI-ETH LP',
    lpAddresses: {
      97: '',
      56: '0x3BECbb09F622187B544C0892EeDeB58C004117e1',
    },
    token: serializedTokens.sushi,
    quoteToken: serializedTokens.eth,
  },
  {
    pid: 194,
    lpSymbol: 'DODO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x220e34306a93002fB7947C9Fc633d6f538bd5032',
    },
    token: serializedTokens.dodo,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 192,
    lpSymbol: 'BRY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xC3E303647cbD43EC22989275e7ecFA8952A6BA02',
    },
    token: serializedTokens.bry,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 191,
    lpSymbol: 'ZEE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6d1299B158bd13F4B50e951aaBf2Aa501FD87E52',
    },
    token: serializedTokens.zee,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 190,
    lpSymbol: 'SWGb-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd2A5008d555371e97F30B6dD71597b4F1eDB0f20',
    },
    token: serializedTokens.swgb,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 189,
    lpSymbol: 'COMP-ETH LP',
    lpAddresses: {
      97: '',
      56: '0x6A55a9176f11c1118f01CBaf6c4033a5c1B22a81',
    },
    token: serializedTokens.comp,
    quoteToken: serializedTokens.eth,
  },
  {
    pid: 188,
    lpSymbol: 'SFP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x01744B868fe98dB669EBf4e9CA557462BAA6097c',
    },
    token: serializedTokens.sfp,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 187,
    lpSymbol: 'LINA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xb923A2Beeb0834528D20b8973A2c69088571aA9E',
    },
    token: serializedTokens.lina,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 186,
    lpSymbol: 'LIT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x41D69Beda3AFF2FFE48E715e2f4248Cb272cFf30',
    },
    token: serializedTokens.lit,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 185,
    lpSymbol: 'HGET-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x239aD1874114B2235485e34b14c48dB73CCA3ffb',
    },
    token: serializedTokens.hget,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 184,
    lpSymbol: 'BDO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xF7045D7dE334a3F6c1254f98167b2af130eEA8E6',
    },
    token: serializedTokens.bdo,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 183,
    lpSymbol: 'EGLD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xB4670bBEce2D02c4D30786D173985A984686042C',
    },
    token: serializedTokens.egld,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 182,
    lpSymbol: 'UST-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1719606031F1E0B3CCaCa11A2CF550Ef8feBEB0F',
    },
    token: serializedTokens.ust,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 181,
    lpSymbol: 'mAMZN-UST LP',
    lpAddresses: {
      97: '',
      56: '0x2c065E42B464ef38480778B0624A207A09042481',
    },
    token: serializedTokens.mamzn,
    quoteToken: serializedTokens.ust,
  },
  {
    pid: 180,
    lpSymbol: 'mGOOGL-UST LP',
    lpAddresses: {
      97: '',
      56: '0x74d8Dbac5053d31E904a821A3B4C411Bd4dd2307',
    },
    token: serializedTokens.mgoogl,
    quoteToken: serializedTokens.ust,
  },
  {
    pid: 179,
    lpSymbol: 'mNFLX-UST LP',
    lpAddresses: {
      97: '',
      56: '0xe1d76359FE4Eb7f0dAd1D719256c22890864718E',
    },
    token: serializedTokens.mnflx,
    quoteToken: serializedTokens.ust,
  },
  {
    pid: 178,
    lpSymbol: 'mTSLA-UST LP',
    lpAddresses: {
      97: '',
      56: '0x36285DDD149949f366b5aFb3f41Cea71d35B8c9e',
    },
    token: serializedTokens.mtsla,
    quoteToken: serializedTokens.ust,
  },
  {
    pid: 177,
    lpSymbol: 'wSOTE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xe5909de3822d589c220Fb4FA1660A0Fd251Fa87d',
    },
    token: serializedTokens.wsote,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 176,
    lpSymbol: 'FRONT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x84Df48B3e900C79539F6c523D6F528802BeAa713',
    },
    token: serializedTokens.front,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 175,
    lpSymbol: 'Helmet-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xD09648792d7e77523ae311Fa5A8F38E4684A5f15',
    },
    token: serializedTokens.helmet,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 174,
    lpSymbol: 'BTCST-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xf967845A6D30C44b555C49C50530076dF5D7fd75',
    },
    token: serializedTokens.btcst,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 173,
    lpSymbol: 'LTC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x286E8d71722c585c9A82876B1B2FB4dEe9fc536E',
    },
    token: serializedTokens.ltc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 172,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x05FC2ac8a4FA697501087C916c87b8a5dc4f7b46',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 171,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xdaFE10aA3AB6758596aDAC70f6873C49F5a9bf86',
    },
    token: serializedTokens.dai,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 170,
    lpSymbol: 'BSCX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5fE5394BBc394345737b8e6e48be2804E89eC0eB',
    },
    token: serializedTokens.bscx,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 169,
    lpSymbol: 'TEN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x003C4d60de42eAD30739dD204BD153fE69E20Fb2',
    },
    token: serializedTokens.ten,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 168,
    lpSymbol: 'bALBT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x1B8ab50d894CfE793B44057F681A950E87Bd0331',
    },
    token: serializedTokens.balbt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 167,
    lpSymbol: 'REEF-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x074ed2De503580887073A0F788E035C0fbe13F48',
    },
    token: serializedTokens.reef,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 166,
    lpSymbol: 'Ditto-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xb33D432eACe45DF62F0145228B550b214DCaA6D4',
    },
    token: serializedTokens.ditto,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 165,
    lpSymbol: 'VAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x9d95063661fa34B67E0Be0cc71Cf92fc6126aF37',
    },
    token: serializedTokens.vai,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 164,
    lpSymbol: 'BLK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xdA5a79fFe24739876a52AEF0d419aBB3b2517922',
    },
    token: serializedTokens.blink,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 163,
    lpSymbol: 'UNFI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x029f944CD3afa7c229122b19c706d8B7c01e062a',
    },
    token: serializedTokens.unfi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 162,
    lpSymbol: 'HARD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x158e337e7Dcfcd8FC512840208BB522d122bB19d',
    },
    token: serializedTokens.hard,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 161,
    lpSymbol: 'CTK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xcbb3fCE7134aF9ef2f3DCe0EAE96db68961b1337',
    },
    token: serializedTokens.ctk,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 160,
    lpSymbol: 'SXP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6294D8518b7321dc22E32AA907A89B1DAfc1aDbB',
    },
    token: serializedTokens.sxp,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 159,
    lpSymbol: 'INJ-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0444712EE8DFF8913B2b44CB1D2a0273b4CDaBe9',
    },
    token: serializedTokens.inj,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 158,
    lpSymbol: 'FIL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xD027c0B352578b1Cf57f472107591CaE5fa27Eb1',
    },
    token: serializedTokens.fil,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 157,
    lpSymbol: 'UNI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2937202a53C82E36bC8beCFBe79795bedF284804',
    },
    token: serializedTokens.uni,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 156,
    lpSymbol: 'YFI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xfffad7374c894E65b498BDBD489a9a5324A59F60',
    },
    token: serializedTokens.yfi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 155,
    lpSymbol: 'YFII-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x237E7016Ff50D3B704A7e07571aE08628909A116',
    },
    token: serializedTokens.yfii,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 154,
    lpSymbol: 'ATOM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7DD05eF533b1eBCE7815c90678D4B7344E32b8c9',
    },
    token: serializedTokens.atom,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 153,
    lpSymbol: 'XRP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0F640E3ec77415Fd810D18B3ac000cD8a172E22f',
    },
    token: serializedTokens.xrp,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 152,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4160910ca32eAD83B6d4b32107974397D2579c2d',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 151,
    lpSymbol: 'ALPHA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0edAA38Bd263E83fAECbC8476822800F30eE6028',
    },
    token: serializedTokens.alpha,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 150,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x356b7d0d3c54F22C82B7a670C6Ba9E2381b0624c',
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 149,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4D7078a6B348766E7a16cD6e6fCb3064721bc6a6',
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 148,
    lpSymbol: 'XVS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x77B5dB64fD4Cf5B699855420fF2608B2EA6708B3',
    },
    token: serializedTokens.xvs,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 147,
    lpSymbol: 'TWT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x34910518Faf5bfd3a4D15ccFE104B63f06ee3d85',
    },
    token: serializedTokens.twt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 146,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x28b81C6b155fd9152AE4A09c4eeB7E7F1C114FaC',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 145,
    lpSymbol: 'LINK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x380941fFd7b7cbf4AEbBfa8A26aa80c2f6570909',
    },
    token: serializedTokens.link,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 144,
    lpSymbol: 'EOS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x082A80b3a55BD3B320a16678784186a979882b21',
    },
    token: serializedTokens.eos,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 143,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3aFfc4dd05286ed6B7206Fc85219d222130e35a9',
    },
    token: serializedTokens.dot,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 142,
    lpSymbol: 'BAND-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x473390697036E7611a670575eA9141583471fF47',
    },
    token: serializedTokens.band,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 141,
    lpSymbol: 'ADA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xec0C5719cC100DfB6c6F371bb48d3D079ab6A6D2',
    },
    token: serializedTokens.ada,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 140,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9bdEdb0c876fC0Da79D945DF28942b898Af89Fc7',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  /**
   * All farms below here are from v1 and are to be set to 0x
   */
  {
    pid: 1,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 136,
    lpSymbol: 'τBTC-BTCB LP',
    lpAddresses: {
      97: '',
      56: '0x2d4e52c48fd18ee06d3959e82ab0f773c41b9277',
    },
    token: serializedTokens.τbtc,
    quoteToken: serializedTokens.btcb,
  },
  {
    pid: 76,
    lpSymbol: 'SWINGBY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4576C456AF93a37a096235e5d83f812AC9aeD027',
    },
    token: serializedTokens.swingby,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 135,
    lpSymbol: 'XED-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x718d3baa161e1a38758bb0f1fe751e401f431ac4',
    },
    token: serializedTokens.xed,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 134,
    lpSymbol: 'HAKKA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x56bc8de6e90a8454cb2614b33e750d960aecdf12',
    },
    token: serializedTokens.hakka,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 133,
    lpSymbol: 'CGG-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x484c60f6202c8043DCA0236bB3101ada7ec50AD4',
    },
    token: serializedTokens.cgg,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 132,
    lpSymbol: 'SUTER-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6Ff75C20656A0E4745E7c114972D361F483AFa5f',
    },
    token: serializedTokens.suter,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 131,
    lpSymbol: 'bROOBEE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9e6f9f3382f9edc683203b528222c554c92382c2',
    },
    token: serializedTokens.broobee,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 130,
    lpSymbol: 'HZN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xee4ca18e91012bf87fefde3dd6723a8834347a4d',
    },
    token: serializedTokens.hzn,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 129,
    lpSymbol: 'ALPA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x837cd42282801e340f1f17aadf3166fee99fb07c',
    },
    token: serializedTokens.alpa,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 128,
    lpSymbol: 'PERL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x044e9985c14a547d478b1e3d4a4e562e69c8f936',
    },
    token: serializedTokens.perl,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 127,
    lpSymbol: 'TLM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x34e821e785A93261B697eBD2797988B3AA78ca33',
    },
    token: serializedTokens.tlm,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 125,
    lpSymbol: 'JGN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x890479844484D67e34B99e1BBc1468231b254c08',
    },
    token: serializedTokens.jgn,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 124,
    lpSymbol: 'EPS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xf9045866e7b372def1eff3712ce55fac1a98daf0',
    },
    token: serializedTokens.eps,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 123,
    lpSymbol: 'ARPA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xfb29fca952b478ddcb8a43f57176161e498225b1',
    },
    token: serializedTokens.arpa,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 122,
    lpSymbol: 'ITAM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xCdC53345192D0e31eEAD03D7E9e008Ee659FAEbE',
    },
    token: serializedTokens.itam,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 121,
    lpSymbol: 'BONDLY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x67581bfb4fc13bb73c71489b504e9b5354769063',
    },
    token: serializedTokens.bondly,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 120,
    lpSymbol: 'TKO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x496a8b716A3A3410B16e71E3c906968CE4488e52',
    },
    token: serializedTokens.tko,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 119,
    lpSymbol: 'APYS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xE5783Cc9dFb3E7e474B81B07369a008e80F1cEdb',
    },
    token: serializedTokens.apys,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 118,
    lpSymbol: 'HOO-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x3c9e55edbd937ae0ad8c084a1a8302110612a371',
    },
    token: serializedTokens.hoo,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 117,
    lpSymbol: 'ODDZ-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x61376b56ff33c618b115131712a4138f98810a6a',
    },
    token: serializedTokens.oddz,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 116,
    lpSymbol: 'EASY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xbd1ec00b0d1cca9d5b28fbe0bb7d664238af2ffa',
    },
    token: serializedTokens.easy,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 115,
    lpSymbol: 'NRV-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5a805994a2e30ac710e7376ccc0211285bd4dd92',
    },
    token: serializedTokens.nrv,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 114,
    lpSymbol: 'DEGO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x17F0b998B81cE75074a7CDAdAe6D63Da3cb23572',
    },
    token: serializedTokens.dego,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 113,
    lpSymbol: 'GUM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x155645cDF8e4B28d5B7790b65d9f79efc222740C',
    },
    token: serializedTokens.gum,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 112,
    lpSymbol: 'pBTC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xb5f6f7dad23132d40d778085d795bd0fd4b859cd',
    },
    token: serializedTokens.pbtc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 111,
    lpSymbol: 'DFT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8FbCbD7e30b1733965a8980bf7Ae2ca1c0C456cc',
    },
    token: serializedTokens.dft,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 110,
    lpSymbol: 'SWTH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8c5cFfad6cddb96Ee33DA685D0d50a37e030E115',
    },
    token: serializedTokens.swth,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 109,
    lpSymbol: 'LIEN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xcd14855150335AAE984aa6D281E090c27035C692',
    },
    token: serializedTokens.lien,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 108,
    lpSymbol: 'ZIL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xc746337b5f800a0e19ed4eb3bda03ff1401b8167',
    },
    token: serializedTokens.zil,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 107,
    lpSymbol: 'pCWS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x889e81d25bffba437b2a5d3e0e4fc58a0e2749c5',
    },
    token: serializedTokens.pcws,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 106,
    lpSymbol: 'bBADGER-BTCB LP',
    lpAddresses: {
      97: '',
      56: '0x10F461CEAC7A17F59e249954Db0784d42EfF5DB5',
    },
    token: serializedTokens.bbadger,
    quoteToken: serializedTokens.btcb,
  },
  {
    pid: 104,
    lpSymbol: 'bDIGG-BTCB LP',
    lpAddresses: {
      97: '',
      56: '0xE1E33459505bB3763843a426F7Fd9933418184ae',
    },
    token: serializedTokens.bdigg,
    quoteToken: serializedTokens.btcb,
  },
  {
    pid: 103,
    lpSymbol: 'LTO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x85644fcd00c401e1a0a0a10d2ae6bbe04a73e4ab',
    },
    token: serializedTokens.lto,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 102,
    lpSymbol: 'MIR-UST LP',
    lpAddresses: {
      97: '',
      56: '0xf64a269F0A06dA07D23F43c1Deb217101ee6Bee7',
    },
    token: serializedTokens.mir,
    quoteToken: serializedTokens.ust,
  },
  {
    pid: 101,
    lpSymbol: 'TRADE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2562f94E90dE6D9eb4fB6B3b8Eab56b15Aa4FC72',
    },
    token: serializedTokens.trade,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 100,
    lpSymbol: 'DUSK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xB7918560273FD56e50E9c215CC0DFE8D764C36C5',
    },
    token: serializedTokens.dusk,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 99,
    lpSymbol: 'BIFI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd132D2C24F29EE8ABb64a66559d1b7aa627Bd7fD',
    },
    token: serializedTokens.bifi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 98,
    lpSymbol: 'TXL-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xD20E0BcCa8B29409bf5726CB24DD779Fe337020e',
    },
    token: serializedTokens.txl,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 97,
    lpSymbol: 'COS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7b1e440240B220244761C9D9A3B07fbA1995BD84',
    },
    token: serializedTokens.cos,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 96,
    lpSymbol: 'BUNNY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7Bb89460599Dbf32ee3Aa50798BBcEae2A5F7f6a',
    },
    token: serializedTokens.bunny,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 95,
    lpSymbol: 'ALICE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xe022baa3E5E87658f789c9132B10d7425Fd3a389',
    },
    token: serializedTokens.alice,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 94,
    lpSymbol: 'FOR-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xfEc200A5E3adDD4a7915a556DDe3F5850e644020',
    },
    token: serializedTokens.for,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 93,
    lpSymbol: 'BUX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0F556f4E47513d1a19Be456a9aF778d7e1A226B9',
    },
    token: serializedTokens.bux,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 92,
    lpSymbol: 'NULS-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xCA01F5D89d5b1d24ca5D6Ecc856D21e8a61DAFCc',
    },
    token: serializedTokens.nuls,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 91,
    lpSymbol: 'NULS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xad7e515409e5a7d516411a85acc88c5e993f570a',
    },
    token: serializedTokens.nuls,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 90,
    lpSymbol: 'BELT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x83B92D283cd279fF2e057BD86a95BdEfffED6faa',
    },
    token: serializedTokens.belt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 89,
    lpSymbol: 'RAMP-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xbF36959939982D0D34B37Fb3f3425da9676C13a3',
    },
    token: serializedTokens.ramp,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 88,
    lpSymbol: 'BFI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x45a9e8d48bc560416008d122c9437927fed50e7d',
    },
    token: serializedTokens.bfi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 87,
    lpSymbol: 'DEXE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x69ab367bc1bea1d2c0fb4dbaec6b7197951da56c',
    },
    token: serializedTokens.dexe,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 86,
    lpSymbol: 'BEL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xAB97952a2806D5c92b7046c7aB13a72A87e0097b',
    },
    token: serializedTokens.bel,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 85,
    lpSymbol: 'TPT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x4db28767d1527ba545ca5bbda1c96a94ed6ff242',
    },
    token: serializedTokens.tpt,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 84,
    lpSymbol: 'WATCH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xdc6c130299e53acd2cc2d291fa10552ca2198a6b',
    },
    token: serializedTokens.watch,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 83,
    lpSymbol: 'xMARK-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x292ca56ed5b3330a19037f835af4a9c0098ea6fa',
    },
    token: serializedTokens.xmark,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 82,
    lpSymbol: 'bMXX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4D5aA94Ce6BbB1BC4eb73207a5a5d4D052cFcD67',
    },
    token: serializedTokens.bmxx,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 81,
    lpSymbol: 'IOTX-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x36b8b28d37f93372188f2aa2507b68a5cd8b2664',
    },
    token: serializedTokens.iotx,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 80,
    lpSymbol: 'BOR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x86e650350c40a5178a5d014ba37fe8556232b898',
    },
    token: serializedTokens.bor,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 79,
    lpSymbol: 'bOPEN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9d8b7e4a9d53654d82f12c83448d8f92732bc761',
    },
    token: serializedTokens.bopen,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 78,
    lpSymbol: 'SUSHI-ETH LP',
    lpAddresses: {
      97: '',
      56: '0x17580340f3daedae871a8c21d15911742ec79e0f',
    },
    token: serializedTokens.sushi,
    quoteToken: serializedTokens.eth,
  },
  {
    pid: 77,
    lpSymbol: 'DODO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9e642d174b14faea31d842dc83037c42b53236e6',
    },
    token: serializedTokens.dodo,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 75,
    lpSymbol: 'BRY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5E3CD27F36932Bc0314aC4e2510585798C34a2fC',
    },
    token: serializedTokens.bry,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 74,
    lpSymbol: 'ZEE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xb5ab3996808c7e489dcdc0f1af2ab212ae0059af',
    },
    token: serializedTokens.zee,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 73,
    lpSymbol: 'SWGb-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xc1800c29cf91954357cd0bf3f0accaada3d0109c',
    },
    token: serializedTokens.swgb,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 72,
    lpSymbol: 'COMP-ETH LP',
    lpAddresses: {
      97: '',
      56: '0x0392957571f28037607c14832d16f8b653edd472',
    },
    token: serializedTokens.comp,
    quoteToken: serializedTokens.eth,
  },
  {
    pid: 71,
    lpSymbol: 'SFP-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xcbe2cf3bd012e9c1ade2ee4d41db3dac763e78f3',
    },
    token: serializedTokens.sfp,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 70,
    lpSymbol: 'BETH-ETH LP',
    lpAddresses: {
      97: '',
      56: '0x99d865ed50d2c32c1493896810fa386c1ce81d91',
    },
    token: serializedTokens.beth,
    quoteToken: serializedTokens.eth,
  },
  {
    pid: 69,
    lpSymbol: 'LINA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xeb325a8ea1c5abf40c7ceaf645596c1f943d0948',
    },
    token: serializedTokens.lina,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 68,
    lpSymbol: 'LIT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x60bB03D1010b99CEAdD0dd209b64bC8bd83da161',
    },
    token: serializedTokens.lit,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 67,
    lpSymbol: 'HGET-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x66b9e1eac8a81f3752f7f3a5e95de460688a17ee',
    },
    token: serializedTokens.hget,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 66,
    lpSymbol: 'BDO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x74690f829fec83ea424ee1f1654041b2491a7be9',
    },
    token: serializedTokens.bdo,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 65,
    lpSymbol: 'EGLD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3ef4952c7a9afbe374ea02d1bf5ed5a0015b7716',
    },
    token: serializedTokens.egld,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 63,
    lpSymbol: 'UST-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xD1F12370b2ba1C79838337648F820a87eDF5e1e6',
    },
    token: serializedTokens.ust,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 62,
    lpSymbol: 'mAMZN-UST LP',
    lpAddresses: {
      97: '',
      56: '0xc92Dc34665c8a21f98E1E38474580b61b4f3e1b9',
    },
    token: serializedTokens.mamzn,
    quoteToken: serializedTokens.ust,
  },
  {
    pid: 61,
    lpSymbol: 'mGOOGL-UST LP',
    lpAddresses: {
      97: '',
      56: '0x852A68181f789AE6d1Da3dF101740a59A071004f',
    },
    token: serializedTokens.mgoogl,
    quoteToken: serializedTokens.ust,
  },
  {
    pid: 60,
    lpSymbol: 'mNFLX-UST LP',
    lpAddresses: {
      97: '',
      56: '0xF609ade3846981825776068a8eD7746470029D1f',
    },
    token: serializedTokens.mnflx,
    quoteToken: serializedTokens.ust,
  },
  {
    pid: 59,
    lpSymbol: 'mTSLA-UST LP',
    lpAddresses: {
      97: '',
      56: '0xD5664D2d15cdffD597515f1c0D945c6c1D3Bf85B',
    },
    token: serializedTokens.mtsla,
    quoteToken: serializedTokens.ust,
  },
  {
    pid: 58,
    lpSymbol: 'wSOTE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xffb9e2d5ce4378f1a89b29bf53f80804cc078102',
    },
    token: serializedTokens.wsote,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 57,
    lpSymbol: 'FRONT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x36b7d2e5c7877392fb17f9219efad56f3d794700',
    },
    token: serializedTokens.front,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 56,
    lpSymbol: 'Helmet-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6411310c07d8c48730172146fd6f31fa84034a8b',
    },
    token: serializedTokens.helmet,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 55,
    lpSymbol: 'BTCST-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x91589786D36fEe5B27A5539CfE638a5fc9834665',
    },
    token: serializedTokens.btcst,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 54,
    lpSymbol: 'LTC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xbc765fd113c5bdb2ebc25f711191b56bb8690aec',
    },
    token: serializedTokens.ltc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 53,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 52,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x3aB77e40340AB084c3e23Be8e5A6f7afed9D41DC',
    },
    token: serializedTokens.dai,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 51,
    lpSymbol: 'BSCX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x20781bc3701c5309ac75291f5d09bdc23d7b7fa8',
    },
    token: serializedTokens.bscx,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 50,
    lpSymbol: 'TEN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x01ecc44ddd2d104f44d2aa1a2bd9dfbc91ae8275',
    },
    token: serializedTokens.ten,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 49,
    lpSymbol: 'bALBT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xbe14f3a89a4f7f279af9d99554cf12e8c29db921',
    },
    token: serializedTokens.balbt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 46,
    lpSymbol: 'OG-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x64373608f2e93ea97ad4d8ca2cce6b2575db2f55',
    },
    token: serializedTokens.og,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 47,
    lpSymbol: 'ASR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd6b900d5308356317299dafe303e661271aa12f1',
    },
    token: serializedTokens.asr,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 48,
    lpSymbol: 'ATM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd5b3ebf1a85d32c73a82b40f75e1cd929caf4029',
    },
    token: serializedTokens.atm,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 45,
    lpSymbol: 'REEF-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58B58cab6C5cF158f63A2390b817710826d116D0',
    },
    token: serializedTokens.reef,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 44,
    lpSymbol: 'Ditto-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x470bc451810b312bbb1256f96b0895d95ea659b1',
    },
    token: serializedTokens.ditto,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 43,
    lpSymbol: 'JUV-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x51a2ffa5b7de506f9a22549e48b33f6cf0d9030e',
    },
    token: serializedTokens.juv,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 42,
    lpSymbol: 'PSG-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9c4f6a5050cf863e67a402e8b377973b4e3372c1',
    },
    token: serializedTokens.psg,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 39,
    lpSymbol: 'UNFI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xbEA35584b9a88107102ABEf0BDeE2c4FaE5D8c31',
    },
    token: serializedTokens.unfi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 41,
    lpSymbol: 'VAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xff17ff314925dff772b71abdff2782bc913b3575',
    },
    token: serializedTokens.vai,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 40,
    lpSymbol: 'BLK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xC743Dc05F03D25E1aF8eC5F8228f4BD25513c8d0',
    },
    token: serializedTokens.blink,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 37,
    lpSymbol: 'HARD-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x9f40e8a2fcaa267a0c374b6c661e0b372264cc3d',
    },
    token: serializedTokens.hard,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x2f7682b64b88149ba3250aee32db712964de5fa9',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'ADA-BNB LP',
    lpAddresses: {
      97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
      56: '0xba51d1ab95756ca4eab8737ecd450cd8f05384cf',
    },
    token: serializedTokens.ada,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'BAND-BNB LP',
    lpAddresses: {
      97: '0xcbe3282a562e23b8c61ed04bb72ffdbb9233b1ce',
      56: '0xc639187ef82271d8f517de6feae4faf5b517533c',
    },
    token: serializedTokens.band,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
    },
    token: serializedTokens.dot,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'EOS-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x981d2ba1b298888408d342c39c2ab92e8991691e',
    },
    token: serializedTokens.eos,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 7,
    lpSymbol: 'LINK-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0xaebe45e3a03b734c68e5557ae04bfc76917b4686',
    },
    token: serializedTokens.link,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 11,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 12,
    lpSymbol: 'TWT-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x610e7a287c27dfFcaC0F0a94f547Cc1B770cF483',
    },
    token: serializedTokens.twt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 13,
    lpSymbol: 'XVS-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x41182c32F854dd97bA0e0B1816022e0aCB2fc0bb',
    },
    token: serializedTokens.xvs,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 14,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 15,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524',
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 16,
    lpSymbol: 'ALPHA-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x4e0f3385d932F7179DeE045369286FFa6B03d887',
    },
    token: serializedTokens.alpha,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 17,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x20bcc3b8a0091ddac2d0bc30f68e6cbb97de59cd',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 18,
    lpSymbol: 'XRP-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0xc7b4b32a3be2cb6572a1c9959401f832ce47a6d2',
    },
    token: serializedTokens.xrp,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 19,
    lpSymbol: 'ATOM-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x2333c77fc0b2875c11409cdcd3c75d42d402e834',
    },
    token: serializedTokens.atom,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 20,
    lpSymbol: 'YFII-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x574a978c2d0d36d707a05e459466c7a1054f1210',
    },
    token: serializedTokens.yfii,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 21,
    lpSymbol: 'DAI-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x56c77d59e82f33c712f919d09fceddf49660a829',
    },
    token: serializedTokens.dai,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 22,
    lpSymbol: 'XTZ-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x5acac332f0f49c8badc7afd0134ad19d3db972e6',
    },
    token: serializedTokens.xtz,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 23,
    lpSymbol: 'BCH-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x54edd846db17f43b6e43296134ecd96284671e81',
    },
    token: serializedTokens.bch,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 24,
    lpSymbol: 'YFI-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x68Ff2ca47D27db5Ac0b5c46587645835dD51D3C1',
    },
    token: serializedTokens.yfi,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 25,
    lpSymbol: 'UNI-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x4269e7F43A63CEA1aD7707Be565a94a9189967E9',
    },
    token: serializedTokens.uni,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 26,
    lpSymbol: 'FIL-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x35fe9787f0ebf2a200bac413d3030cf62d312774',
    },
    token: serializedTokens.fil,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 27,
    lpSymbol: 'INJ-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x7a34bd64d18e44CfdE3ef4B81b87BAf3EB3315B6',
    },
    token: serializedTokens.inj,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 29,
    lpSymbol: 'USDC-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x30479874f9320a62bce3bc0e315c920e1d73e278',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 30,
    lpSymbol: 'SXP-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x752E713fB70E3FA1Ac08bCF34485F14A986956c4',
    },
    token: serializedTokens.sxp,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 32,
    lpSymbol: 'CTK-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x7793870484647a7278907498ec504879d6971EAb',
    },
    token: serializedTokens.ctk,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 34,
    lpSymbol: 'STAX-CAKE LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x7cd05f8b960ba071fdf69c750c0e5a57c8366500',
    },
    token: serializedTokens.stax,
    quoteToken: serializedTokens.cake,
    isCommunity: true,
  },
  {
    pid: 35,
    lpSymbol: 'NAR-CAKE LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x745c4fd226e169d6da959283275a8e0ecdd7f312',
    },
    token: serializedTokens.nar,
    quoteToken: serializedTokens.cake,
    isCommunity: true,
  },
  {
    pid: 36,
    lpSymbol: 'NYA-CAKE LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x2730bf486d658838464a4ef077880998d944252d',
    },
    token: serializedTokens.nya,
    quoteToken: serializedTokens.cake,
    isCommunity: true,
  },
  {
    pid: 38,
    lpSymbol: 'bROOBEE-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0x970858016C963b780E06f7DCfdEf8e809919BcE8',
    },
    token: serializedTokens.broobee,
    quoteToken: serializedTokens.cake,
    isCommunity: true,
  },
  {
    pid: 8,
    lpSymbol: 'BAKE-BNB Bakery LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0xc2eed0f5a0dc28cfa895084bc0a9b8b8279ae492',
    },
    token: serializedTokens.bake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 9,
    lpSymbol: 'BURGER-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0xd937FB9E6e47F3805981453BFB277a49FFfE04D7',
    },
    token: serializedTokens.burger,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 10,
    lpSymbol: 'BAKE-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x3Da30727ed0626b78C212e81B37B97A8eF8A25bB',
    },
    token: serializedTokens.bake,
    quoteToken: serializedTokens.wbnb,
  },
]

export default farms

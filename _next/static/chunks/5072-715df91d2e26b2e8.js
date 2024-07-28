"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5072],{52129:function(E,_,A){var R=A(35944),I=A(82200),T=A(15861),r=A(51233),C=A(67294),t=A(10265),N=A(77747),O=A(47277),L=A(93734);_.Z=E=>{let{isKYCNotVerified:_,buttons:A,children:e,title:a}=E,{address:o,chain:n}=(0,C.useContext)(L.V),S=(0,C.useMemo)(()=>!!(null==n?void 0:n.id)&&![t.X.MAINNET,t.X.BSC].includes(null==n?void 0:n.id),[null==n?void 0:n.id]);return S||!o||_?(0,R.BX)(I.Z,{sx:{width:"100%",height:"100%",flex:1,zIndex:5,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,R.tZ)(T.Z,{textAlign:"center",variant:"h6",mb:2,children:S?"Switch to a supported network to view your positions":a}),(0,R.tZ)(r.Z,{direction:"row",spacing:2,children:S?(0,R.tZ)(O.ZR,{}):A||(0,R.tZ)(N.Z,{})})]}):(0,R.tZ)(R.HY,{children:e})}},14779:function(E,_,A){A.d(_,{Jv:function(){return VError_VError},iE:function(){return formatVErrorToReadableString}});let VError_VError=class VError_VError extends Error{constructor({type:E,code:_,data:A}){super(_),this.type=E,this.code=_,this.data=A}};(R=L||(L={}))[R.NO_ERROR=0]="NO_ERROR",R[R.UNAUTHORIZED=1]="UNAUTHORIZED",R[R.COMPTROLLER_MISMATCH=2]="COMPTROLLER_MISMATCH",R[R.INSUFFICIENT_SHORTFALL=3]="INSUFFICIENT_SHORTFALL",R[R.INSUFFICIENT_LIQUIDITY=4]="INSUFFICIENT_LIQUIDITY",R[R.INVALID_CLOSE_FACTOR=5]="INVALID_CLOSE_FACTOR",R[R.INVALID_COLLATERAL_FACTOR=6]="INVALID_COLLATERAL_FACTOR",R[R.INVALID_LIQUIDATION_INCENTIVE=7]="INVALID_LIQUIDATION_INCENTIVE",R[R.MARKET_NOT_ENTERED=8]="MARKET_NOT_ENTERED",R[R.MARKET_NOT_LISTED=9]="MARKET_NOT_LISTED",R[R.MARKET_ALREADY_LISTED=10]="MARKET_ALREADY_LISTED",R[R.MATH_ERROR=11]="MATH_ERROR",R[R.NONZERO_BORROW_BALANCE=12]="NONZERO_BORROW_BALANCE",R[R.PRICE_ERROR=13]="PRICE_ERROR",R[R.REJECTION=14]="REJECTION",R[R.SNAPSHOT_ERROR=15]="SNAPSHOT_ERROR",R[R.TOO_MANY_ASSETS=16]="TOO_MANY_ASSETS",R[R.TOO_MUCH_REPAY=17]="TOO_MUCH_REPAY",R[R.INSUFFICIENT_BALANCE_FOR_VAI=18]="INSUFFICIENT_BALANCE_FOR_VAI",(I=e||(e={}))[I.ACCEPT_ADMIN_PENDING_ADMIN_CHECK=0]="ACCEPT_ADMIN_PENDING_ADMIN_CHECK",I[I.ACCEPT_PENDING_IMPLEMENTATION_ADDRESS_CHECK=1]="ACCEPT_PENDING_IMPLEMENTATION_ADDRESS_CHECK",I[I.EXIT_MARKET_BALANCE_OWED=2]="EXIT_MARKET_BALANCE_OWED",I[I.EXIT_MARKET_REJECTION=3]="EXIT_MARKET_REJECTION",I[I.SET_CLOSE_FACTOR_OWNER_CHECK=4]="SET_CLOSE_FACTOR_OWNER_CHECK",I[I.SET_CLOSE_FACTOR_VALIDATION=5]="SET_CLOSE_FACTOR_VALIDATION",I[I.SET_COLLATERAL_FACTOR_OWNER_CHECK=6]="SET_COLLATERAL_FACTOR_OWNER_CHECK",I[I.SET_COLLATERAL_FACTOR_NO_EXISTS=7]="SET_COLLATERAL_FACTOR_NO_EXISTS",I[I.SET_COLLATERAL_FACTOR_VALIDATION=8]="SET_COLLATERAL_FACTOR_VALIDATION",I[I.SET_COLLATERAL_FACTOR_WITHOUT_PRICE=9]="SET_COLLATERAL_FACTOR_WITHOUT_PRICE",I[I.SET_IMPLEMENTATION_OWNER_CHECK=10]="SET_IMPLEMENTATION_OWNER_CHECK",I[I.SET_LIQUIDATION_INCENTIVE_OWNER_CHECK=11]="SET_LIQUIDATION_INCENTIVE_OWNER_CHECK",I[I.SET_LIQUIDATION_INCENTIVE_VALIDATION=12]="SET_LIQUIDATION_INCENTIVE_VALIDATION",I[I.SET_MAX_ASSETS_OWNER_CHECK=13]="SET_MAX_ASSETS_OWNER_CHECK",I[I.SET_PENDING_ADMIN_OWNER_CHECK=14]="SET_PENDING_ADMIN_OWNER_CHECK",I[I.SET_PENDING_IMPLEMENTATION_OWNER_CHECK=15]="SET_PENDING_IMPLEMENTATION_OWNER_CHECK",I[I.SET_PRICE_ORACLE_OWNER_CHECK=16]="SET_PRICE_ORACLE_OWNER_CHECK",I[I.SUPPORT_MARKET_EXISTS=17]="SUPPORT_MARKET_EXISTS",I[I.SUPPORT_MARKET_OWNER_CHECK=18]="SUPPORT_MARKET_OWNER_CHECK",I[I.SET_PAUSE_GUARDIAN_OWNER_CHECK=19]="SET_PAUSE_GUARDIAN_OWNER_CHECK",I[I.SET_VAI_MINT_RATE_CHECK=20]="SET_VAI_MINT_RATE_CHECK",I[I.SET_VAICONTROLLER_OWNER_CHECK=21]="SET_VAICONTROLLER_OWNER_CHECK",I[I.SET_MINTED_VAI_REJECTION=22]="SET_MINTED_VAI_REJECTION",I[I.SET_TREASURY_OWNER_CHECK=23]="SET_TREASURY_OWNER_CHECK",(T=a||(a={}))[T.NO_ERROR=0]="NO_ERROR",T[T.UNAUTHORIZED=1]="UNAUTHORIZED",T[T.BAD_INPUT=2]="BAD_INPUT",T[T.COMPTROLLER_REJECTION=3]="COMPTROLLER_REJECTION",T[T.COMPTROLLER_CALCULATION_ERROR=4]="COMPTROLLER_CALCULATION_ERROR",T[T.INTEREST_RATE_MODEL_ERROR=5]="INTEREST_RATE_MODEL_ERROR",T[T.INVALID_ACCOUNT_PAIR=6]="INVALID_ACCOUNT_PAIR",T[T.INVALID_CLOSE_AMOUNT_REQUESTED=7]="INVALID_CLOSE_AMOUNT_REQUESTED",T[T.INVALID_COLLATERAL_FACTOR=8]="INVALID_COLLATERAL_FACTOR",T[T.MATH_ERROR=9]="MATH_ERROR",T[T.MARKET_NOT_FRESH=10]="MARKET_NOT_FRESH",T[T.MARKET_NOT_LISTED=11]="MARKET_NOT_LISTED",T[T.TOKEN_INSUFFICIENT_ALLOWANCE=12]="TOKEN_INSUFFICIENT_ALLOWANCE",T[T.TOKEN_INSUFFICIENT_BALANCE=13]="TOKEN_INSUFFICIENT_BALANCE",T[T.TOKEN_INSUFFICIENT_CASH=14]="TOKEN_INSUFFICIENT_CASH",T[T.TOKEN_TRANSFER_IN_FAILED=15]="TOKEN_TRANSFER_IN_FAILED",T[T.TOKEN_TRANSFER_OUT_FAILED=16]="TOKEN_TRANSFER_OUT_FAILED",T[T.TOKEN_PRICE_ERROR=17]="TOKEN_PRICE_ERROR",(r=o||(o={}))[r.ACCEPT_ADMIN_PENDING_ADMIN_CHECK=0]="ACCEPT_ADMIN_PENDING_ADMIN_CHECK",r[r.ACCRUE_INTEREST_ACCUMULATED_INTEREST_CALCULATION_FAILED=1]="ACCRUE_INTEREST_ACCUMULATED_INTEREST_CALCULATION_FAILED",r[r.ACCRUE_INTEREST_BORROW_RATE_CALCULATION_FAILED=2]="ACCRUE_INTEREST_BORROW_RATE_CALCULATION_FAILED",r[r.ACCRUE_INTEREST_NEW_BORROW_INDEX_CALCULATION_FAILED=3]="ACCRUE_INTEREST_NEW_BORROW_INDEX_CALCULATION_FAILED",r[r.ACCRUE_INTEREST_NEW_TOTAL_BORROWS_CALCULATION_FAILED=4]="ACCRUE_INTEREST_NEW_TOTAL_BORROWS_CALCULATION_FAILED",r[r.ACCRUE_INTEREST_NEW_TOTAL_RESERVES_CALCULATION_FAILED=5]="ACCRUE_INTEREST_NEW_TOTAL_RESERVES_CALCULATION_FAILED",r[r.ACCRUE_INTEREST_SIMPLE_INTEREST_FACTOR_CALCULATION_FAILED=6]="ACCRUE_INTEREST_SIMPLE_INTEREST_FACTOR_CALCULATION_FAILED",r[r.BORROW_ACCUMULATED_BALANCE_CALCULATION_FAILED=7]="BORROW_ACCUMULATED_BALANCE_CALCULATION_FAILED",r[r.BORROW_ACCRUE_INTEREST_FAILED=8]="BORROW_ACCRUE_INTEREST_FAILED",r[r.BORROW_CASH_NOT_AVAILABLE=9]="BORROW_CASH_NOT_AVAILABLE",r[r.BORROW_FRESHNESS_CHECK=10]="BORROW_FRESHNESS_CHECK",r[r.BORROW_NEW_TOTAL_BALANCE_CALCULATION_FAILED=11]="BORROW_NEW_TOTAL_BALANCE_CALCULATION_FAILED",r[r.BORROW_NEW_ACCOUNT_BORROW_BALANCE_CALCULATION_FAILED=12]="BORROW_NEW_ACCOUNT_BORROW_BALANCE_CALCULATION_FAILED",r[r.BORROW_MARKET_NOT_LISTED=13]="BORROW_MARKET_NOT_LISTED",r[r.BORROW_COMPTROLLER_REJECTION=14]="BORROW_COMPTROLLER_REJECTION",r[r.LIQUIDATE_ACCRUE_BORROW_INTEREST_FAILED=15]="LIQUIDATE_ACCRUE_BORROW_INTEREST_FAILED",r[r.LIQUIDATE_ACCRUE_COLLATERAL_INTEREST_FAILED=16]="LIQUIDATE_ACCRUE_COLLATERAL_INTEREST_FAILED",r[r.LIQUIDATE_COLLATERAL_FRESHNESS_CHECK=17]="LIQUIDATE_COLLATERAL_FRESHNESS_CHECK",r[r.LIQUIDATE_COMPTROLLER_REJECTION=18]="LIQUIDATE_COMPTROLLER_REJECTION",r[r.LIQUIDATE_COMPTROLLER_CALCULATE_AMOUNT_SEIZE_FAILED=19]="LIQUIDATE_COMPTROLLER_CALCULATE_AMOUNT_SEIZE_FAILED",r[r.LIQUIDATE_CLOSE_AMOUNT_IS_UINT_MAX=20]="LIQUIDATE_CLOSE_AMOUNT_IS_UINT_MAX",r[r.LIQUIDATE_CLOSE_AMOUNT_IS_ZERO=21]="LIQUIDATE_CLOSE_AMOUNT_IS_ZERO",r[r.LIQUIDATE_FRESHNESS_CHECK=22]="LIQUIDATE_FRESHNESS_CHECK",r[r.LIQUIDATE_LIQUIDATOR_IS_BORROWER=23]="LIQUIDATE_LIQUIDATOR_IS_BORROWER",r[r.LIQUIDATE_REPAY_BORROW_FRESH_FAILED=24]="LIQUIDATE_REPAY_BORROW_FRESH_FAILED",r[r.LIQUIDATE_SEIZE_BALANCE_INCREMENT_FAILED=25]="LIQUIDATE_SEIZE_BALANCE_INCREMENT_FAILED",r[r.LIQUIDATE_SEIZE_BALANCE_DECREMENT_FAILED=26]="LIQUIDATE_SEIZE_BALANCE_DECREMENT_FAILED",r[r.LIQUIDATE_SEIZE_COMPTROLLER_REJECTION=27]="LIQUIDATE_SEIZE_COMPTROLLER_REJECTION",r[r.LIQUIDATE_SEIZE_LIQUIDATOR_IS_BORROWER=28]="LIQUIDATE_SEIZE_LIQUIDATOR_IS_BORROWER",r[r.LIQUIDATE_SEIZE_TOO_MUCH=29]="LIQUIDATE_SEIZE_TOO_MUCH",r[r.MINT_ACCRUE_INTEREST_FAILED=30]="MINT_ACCRUE_INTEREST_FAILED",r[r.MINT_COMPTROLLER_REJECTION=31]="MINT_COMPTROLLER_REJECTION",r[r.MINT_EXCHANGE_CALCULATION_FAILED=32]="MINT_EXCHANGE_CALCULATION_FAILED",r[r.MINT_EXCHANGE_RATE_READ_FAILED=33]="MINT_EXCHANGE_RATE_READ_FAILED",r[r.MINT_FRESHNESS_CHECK=34]="MINT_FRESHNESS_CHECK",r[r.MINT_NEW_ACCOUNT_BALANCE_CALCULATION_FAILED=35]="MINT_NEW_ACCOUNT_BALANCE_CALCULATION_FAILED",r[r.MINT_NEW_TOTAL_SUPPLY_CALCULATION_FAILED=36]="MINT_NEW_TOTAL_SUPPLY_CALCULATION_FAILED",r[r.MINT_TRANSFER_IN_FAILED=37]="MINT_TRANSFER_IN_FAILED",r[r.MINT_TRANSFER_IN_NOT_POSSIBLE=38]="MINT_TRANSFER_IN_NOT_POSSIBLE",r[r.REDEEM_ACCRUE_INTEREST_FAILED=39]="REDEEM_ACCRUE_INTEREST_FAILED",r[r.REDEEM_COMPTROLLER_REJECTION=40]="REDEEM_COMPTROLLER_REJECTION",r[r.REDEEM_EXCHANGE_TOKENS_CALCULATION_FAILED=41]="REDEEM_EXCHANGE_TOKENS_CALCULATION_FAILED",r[r.REDEEM_EXCHANGE_AMOUNT_CALCULATION_FAILED=42]="REDEEM_EXCHANGE_AMOUNT_CALCULATION_FAILED",r[r.REDEEM_EXCHANGE_RATE_READ_FAILED=43]="REDEEM_EXCHANGE_RATE_READ_FAILED",r[r.REDEEM_FRESHNESS_CHECK=44]="REDEEM_FRESHNESS_CHECK",r[r.REDEEM_NEW_ACCOUNT_BALANCE_CALCULATION_FAILED=45]="REDEEM_NEW_ACCOUNT_BALANCE_CALCULATION_FAILED",r[r.REDEEM_NEW_TOTAL_SUPPLY_CALCULATION_FAILED=46]="REDEEM_NEW_TOTAL_SUPPLY_CALCULATION_FAILED",r[r.REDEEM_TRANSFER_OUT_NOT_POSSIBLE=47]="REDEEM_TRANSFER_OUT_NOT_POSSIBLE",r[r.REDUCE_RESERVES_ACCRUE_INTEREST_FAILED=48]="REDUCE_RESERVES_ACCRUE_INTEREST_FAILED",r[r.REDUCE_RESERVES_ADMIN_CHECK=49]="REDUCE_RESERVES_ADMIN_CHECK",r[r.REDUCE_RESERVES_CASH_NOT_AVAILABLE=50]="REDUCE_RESERVES_CASH_NOT_AVAILABLE",r[r.REDUCE_RESERVES_FRESH_CHECK=51]="REDUCE_RESERVES_FRESH_CHECK",r[r.REDUCE_RESERVES_VALIDATION=52]="REDUCE_RESERVES_VALIDATION",r[r.REPAY_BEHALF_ACCRUE_INTEREST_FAILED=53]="REPAY_BEHALF_ACCRUE_INTEREST_FAILED",r[r.REPAY_BORROW_ACCRUE_INTEREST_FAILED=54]="REPAY_BORROW_ACCRUE_INTEREST_FAILED",r[r.REPAY_BORROW_ACCUMULATED_BALANCE_CALCULATION_FAILED=55]="REPAY_BORROW_ACCUMULATED_BALANCE_CALCULATION_FAILED",r[r.REPAY_BORROW_COMPTROLLER_REJECTION=56]="REPAY_BORROW_COMPTROLLER_REJECTION",r[r.REPAY_BORROW_FRESHNESS_CHECK=57]="REPAY_BORROW_FRESHNESS_CHECK",r[r.REPAY_BORROW_NEW_ACCOUNT_BORROW_BALANCE_CALCULATION_FAILED=58]="REPAY_BORROW_NEW_ACCOUNT_BORROW_BALANCE_CALCULATION_FAILED",r[r.REPAY_BORROW_NEW_TOTAL_BALANCE_CALCULATION_FAILED=59]="REPAY_BORROW_NEW_TOTAL_BALANCE_CALCULATION_FAILED",r[r.REPAY_BORROW_TRANSFER_IN_NOT_POSSIBLE=60]="REPAY_BORROW_TRANSFER_IN_NOT_POSSIBLE",r[r.SET_COLLATERAL_FACTOR_OWNER_CHECK=61]="SET_COLLATERAL_FACTOR_OWNER_CHECK",r[r.SET_COLLATERAL_FACTOR_VALIDATION=62]="SET_COLLATERAL_FACTOR_VALIDATION",r[r.SET_COMPTROLLER_OWNER_CHECK=63]="SET_COMPTROLLER_OWNER_CHECK",r[r.SET_INTEREST_RATE_MODEL_ACCRUE_INTEREST_FAILED=64]="SET_INTEREST_RATE_MODEL_ACCRUE_INTEREST_FAILED",r[r.SET_INTEREST_RATE_MODEL_FRESH_CHECK=65]="SET_INTEREST_RATE_MODEL_FRESH_CHECK",r[r.SET_INTEREST_RATE_MODEL_OWNER_CHECK=66]="SET_INTEREST_RATE_MODEL_OWNER_CHECK",r[r.SET_MAX_ASSETS_OWNER_CHECK=67]="SET_MAX_ASSETS_OWNER_CHECK",r[r.SET_ORACLE_MARKET_NOT_LISTED=68]="SET_ORACLE_MARKET_NOT_LISTED",r[r.SET_PENDING_ADMIN_OWNER_CHECK=69]="SET_PENDING_ADMIN_OWNER_CHECK",r[r.SET_RESERVE_FACTOR_ACCRUE_INTEREST_FAILED=70]="SET_RESERVE_FACTOR_ACCRUE_INTEREST_FAILED",r[r.SET_RESERVE_FACTOR_ADMIN_CHECK=71]="SET_RESERVE_FACTOR_ADMIN_CHECK",r[r.SET_RESERVE_FACTOR_FRESH_CHECK=72]="SET_RESERVE_FACTOR_FRESH_CHECK",r[r.SET_RESERVE_FACTOR_BOUNDS_CHECK=73]="SET_RESERVE_FACTOR_BOUNDS_CHECK",r[r.TRANSFER_COMPTROLLER_REJECTION=74]="TRANSFER_COMPTROLLER_REJECTION",r[r.TRANSFER_NOT_ALLOWED=75]="TRANSFER_NOT_ALLOWED",r[r.TRANSFER_NOT_ENOUGH=76]="TRANSFER_NOT_ENOUGH",r[r.TRANSFER_TOO_MUCH=77]="TRANSFER_TOO_MUCH",r[r.ADD_RESERVES_ACCRUE_INTEREST_FAILED=78]="ADD_RESERVES_ACCRUE_INTEREST_FAILED",r[r.ADD_RESERVES_FRESH_CHECK=79]="ADD_RESERVES_FRESH_CHECK",r[r.ADD_RESERVES_TRANSFER_IN_NOT_POSSIBLE=80]="ADD_RESERVES_TRANSFER_IN_NOT_POSSIBLE",r[r.TOKEN_GET_UNDERLYING_PRICE_ERROR=81]="TOKEN_GET_UNDERLYING_PRICE_ERROR",r[r.REPAY_VAI_COMPTROLLER_REJECTION=82]="REPAY_VAI_COMPTROLLER_REJECTION",r[r.REPAY_VAI_FRESHNESS_CHECK=83]="REPAY_VAI_FRESHNESS_CHECK",r[r.VAI_MINT_EXCHANGE_CALCULATION_FAILED=84]="VAI_MINT_EXCHANGE_CALCULATION_FAILED",r[r.SFT_MINT_NEW_ACCOUNT_BALANCE_CALCULATION_FAILED=85]="SFT_MINT_NEW_ACCOUNT_BALANCE_CALCULATION_FAILED",r[r.REDEEM_FEE_CALCULATION_FAILED=86]="REDEEM_FEE_CALCULATION_FAILED",(C=n||(n={}))[C.NO_ERROR=0]="NO_ERROR",C[C.UNAUTHORIZED=1]="UNAUTHORIZED",C[C.REJECTION=2]="REJECTION",C[C.SNAPSHOT_ERROR=3]="SNAPSHOT_ERROR",C[C.PRICE_ERROR=4]="PRICE_ERROR",C[C.MATH_ERROR=5]="MATH_ERROR",C[C.INSUFFICIENT_BALANCE_FOR_VAI=6]="INSUFFICIENT_BALANCE_FOR_VAI",(t=S||(S={}))[t.SET_PENDING_ADMIN_OWNER_CHECK=0]="SET_PENDING_ADMIN_OWNER_CHECK",t[t.SET_PENDING_IMPLEMENTATION_OWNER_CHECK=1]="SET_PENDING_IMPLEMENTATION_OWNER_CHECK",t[t.SET_COMPTROLLER_OWNER_CHECK=2]="SET_COMPTROLLER_OWNER_CHECK",t[t.ACCEPT_ADMIN_PENDING_ADMIN_CHECK=3]="ACCEPT_ADMIN_PENDING_ADMIN_CHECK",t[t.ACCEPT_PENDING_IMPLEMENTATION_ADDRESS_CHECK=4]="ACCEPT_PENDING_IMPLEMENTATION_ADDRESS_CHECK",t[t.VAI_MINT_REJECTION=5]="VAI_MINT_REJECTION",t[t.VAI_BURN_REJECTION=6]="VAI_BURN_REJECTION",t[t.VAI_LIQUIDATE_ACCRUE_BORROW_INTEREST_FAILED=7]="VAI_LIQUIDATE_ACCRUE_BORROW_INTEREST_FAILED",t[t.VAI_LIQUIDATE_ACCRUE_COLLATERAL_INTEREST_FAILED=8]="VAI_LIQUIDATE_ACCRUE_COLLATERAL_INTEREST_FAILED",t[t.VAI_LIQUIDATE_COLLATERAL_FRESHNESS_CHECK=9]="VAI_LIQUIDATE_COLLATERAL_FRESHNESS_CHECK",t[t.VAI_LIQUIDATE_COMPTROLLER_REJECTION=10]="VAI_LIQUIDATE_COMPTROLLER_REJECTION",t[t.VAI_LIQUIDATE_COMPTROLLER_CALCULATE_AMOUNT_SEIZE_FAILED=11]="VAI_LIQUIDATE_COMPTROLLER_CALCULATE_AMOUNT_SEIZE_FAILED",t[t.VAI_LIQUIDATE_CLOSE_AMOUNT_IS_UINT_MAX=12]="VAI_LIQUIDATE_CLOSE_AMOUNT_IS_UINT_MAX",t[t.VAI_LIQUIDATE_CLOSE_AMOUNT_IS_ZERO=13]="VAI_LIQUIDATE_CLOSE_AMOUNT_IS_ZERO",t[t.VAI_LIQUIDATE_FRESHNESS_CHECK=14]="VAI_LIQUIDATE_FRESHNESS_CHECK",t[t.VAI_LIQUIDATE_LIQUIDATOR_IS_BORROWER=15]="VAI_LIQUIDATE_LIQUIDATOR_IS_BORROWER",t[t.VAI_LIQUIDATE_REPAY_BORROW_FRESH_FAILED=16]="VAI_LIQUIDATE_REPAY_BORROW_FRESH_FAILED",t[t.VAI_LIQUIDATE_SEIZE_BALANCE_INCREMENT_FAILED=17]="VAI_LIQUIDATE_SEIZE_BALANCE_INCREMENT_FAILED",t[t.VAI_LIQUIDATE_SEIZE_BALANCE_DECREMENT_FAILED=18]="VAI_LIQUIDATE_SEIZE_BALANCE_DECREMENT_FAILED",t[t.VAI_LIQUIDATE_SEIZE_COMPTROLLER_REJECTION=19]="VAI_LIQUIDATE_SEIZE_COMPTROLLER_REJECTION",t[t.VAI_LIQUIDATE_SEIZE_LIQUIDATOR_IS_BORROWER=20]="VAI_LIQUIDATE_SEIZE_LIQUIDATOR_IS_BORROWER",t[t.VAI_LIQUIDATE_SEIZE_TOO_MUCH=21]="VAI_LIQUIDATE_SEIZE_TOO_MUCH",t[t.MINT_FEE_CALCULATION_FAILED=22]="MINT_FEE_CALCULATION_FAILED",t[t.SET_TREASURY_OWNER_CHECK=23]="SET_TREASURY_OWNER_CHECK",(N=s||(s={}))[N.NO_ERROR=0]="NO_ERROR",N[N.UNAUTHORIZED=1]="UNAUTHORIZED",(O=i||(i={}))[O.ACCEPT_ADMIN_PENDING_ADMIN_CHECK=0]="ACCEPT_ADMIN_PENDING_ADMIN_CHECK",O[O.ACCEPT_PENDING_IMPLEMENTATION_ADDRESS_CHECK=1]="ACCEPT_PENDING_IMPLEMENTATION_ADDRESS_CHECK",O[O.SET_PENDING_ADMIN_OWNER_CHECK=2]="SET_PENDING_ADMIN_OWNER_CHECK",O[O.SET_PENDING_IMPLEMENTATION_OWNER_CHECK=3]="SET_PENDING_IMPLEMENTATION_OWNER_CHECK";var R,I,T,r,C,t,N,O,L,e,a,o,n,S,s,i,D=A(81002),U=A(77343);let c={NO_ERROR:(0,U.t)("transactionErrors.noError"),UNAUTHORIZED:(0,U.t)("transactionErrors.unauthorized"),COMPTROLLER_MISMATCH:(0,U.t)("transactionErrors.comptrollerMismatch"),INSUFFICIENT_SHORTFALL:(0,U.t)("transactionErrors.insufficientShortfall"),INSUFFICIENT_LIQUIDITY:(0,U.t)("transactionErrors.insufficientLiquidity"),INVALID_CLOSE_FACTOR:(0,U.t)("transactionErrors.invalidCloseFactor"),INVALID_COLLATERAL_FACTOR:(0,U.t)("transactionErrors.invalidCollateralFactor"),INVALID_LIQUIDATION_INCENTIVE:(0,U.t)("transactionErrors.invalidLiquidationIncentive"),MARKET_NOT_ENTERED:(0,U.t)("transactionErrors.marketNotEntered"),MARKET_NOT_LISTED:(0,U.t)("transactionErrors.marketNotListed"),MARKET_ALREADY_LISTED:(0,U.t)("transactionErrors.marketAlreadyListed"),MATH_ERROR:(0,U.t)("transactionErrors.mathError"),NONZERO_BORROW_BALANCE:(0,U.t)("transactionErrors.nonzeroBorrowBalance"),PRICE_ERROR:(0,U.t)("transactionErrors.priceError"),REJECTION:(0,U.t)("transactionErrors.rejection"),SNAPSHOT_ERROR:(0,U.t)("transactionErrors.snapshotError"),TOO_MANY_ASSETS:(0,U.t)("transactionErrors.tooManyAssets"),TOO_MUCH_REPAY:(0,U.t)("transactionErrors.tooMuchRepay"),INSUFFICIENT_BALANCE_FOR_VAI:(0,U.t)("transactionErrors.insufficientBalanceForVai"),ACCEPT_ADMIN_PENDING_ADMIN_CHECK:(0,U.t)("transactionErrors.acceptAdminPendingAdminCheck"),ACCEPT_PENDING_IMPLEMENTATION_ADDRESS_CHECK:(0,U.t)("transactionErrors.acceptPendingImplementationAddressCheck"),EXIT_MARKET_BALANCE_OWED:(0,U.t)("transactionErrors.exitMarketBalanceOwed"),EXIT_MARKET_REJECTION:(0,U.t)("transactionErrors.exitMarketRejection"),SET_CLOSE_FACTOR_OWNER_CHECK:(0,U.t)("transactionErrors.setCloseFactorOwnerCheck"),SET_CLOSE_FACTOR_VALIDATION:(0,U.t)("transactionErrors.setCloseFactorValidation"),SET_COLLATERAL_FACTOR_OWNER_CHECK:(0,U.t)("transactionErrors.setCollateralFactorOwnerCheck"),SET_COLLATERAL_FACTOR_NO_EXISTS:(0,U.t)("transactionErrors.setCollateralFactorNoExists"),SET_COLLATERAL_FACTOR_VALIDATION:(0,U.t)("transactionErrors.setCollateralFactorValidation"),SET_COLLATERAL_FACTOR_WITHOUT_PRICE:(0,U.t)("transactionErrors.setCollateralFactorWithoutPrice"),SET_IMPLEMENTATION_OWNER_CHECK:(0,U.t)("transactionErrors.setImplementationOwnerCheck"),SET_LIQUIDATION_INCENTIVE_OWNER_CHECK:(0,U.t)("transactionErrors.setLiquidationIncentiveOwnerCheck"),SET_LIQUIDATION_INCENTIVE_VALIDATION:(0,U.t)("transactionErrors.setLiquidationIncentiveValidation"),SET_MAX_ASSETS_OWNER_CHECK:(0,U.t)("transactionErrors.setMaxAssetsOwnerCheck"),SET_PENDING_ADMIN_OWNER_CHECK:(0,U.t)("transactionErrors.setPendingAdminOwnerCheck"),SET_PENDING_IMPLEMENTATION_OWNER_CHECK:(0,U.t)("transactionErrors.setPendingImplementationOwnerCheck"),SET_PRICE_ORACLE_OWNER_CHECK:(0,U.t)("transactionErrors.setPriceOracleOwnerCheck"),SUPPORT_MARKET_EXISTS:(0,U.t)("transactionErrors.supportMarketExists"),SUPPORT_MARKET_OWNER_CHECK:(0,U.t)("transactionErrors.supportMarketOwnerCheck"),SET_PAUSE_GUARDIAN_OWNER_CHECK:(0,U.t)("transactionErrors.setPauseGuardianOwnerCheck"),SET_VAI_MINT_RATE_CHECK:(0,U.t)("transactionErrors.setVaiMintRateCheck"),SET_VAICONTROLLER_OWNER_CHECK:(0,U.t)("transactionErrors.setVaiControllerOwnerCheck"),SET_MINTED_VAI_REJECTION:(0,U.t)("transactionErrors.setMintedVaiRejection"),SET_TREASURY_OWNER_CHECK:(0,U.t)("transactionErrors.setTreasuryOwnerCheck"),BAD_INPUT:(0,U.t)("transactionErrors.badInput"),COMPTROLLER_REJECTION:(0,U.t)("transactionErrors.comptrollerRejection"),COMPTROLLER_CALCULATION_ERROR:(0,U.t)("transactionErrors.comptrollerCalculationError"),INTEREST_RATE_MODEL_ERROR:(0,U.t)("transactionErrors.interestRateModelError"),INVALID_ACCOUNT_PAIR:(0,U.t)("transactionErrors.invalidAccountPair"),INVALID_CLOSE_AMOUNT_REQUESTED:(0,U.t)("transactionErrors.invalidCloseAmountRequested"),MARKET_NOT_FRESH:(0,U.t)("transactionErrors.marketNotFresh"),TOKEN_INSUFFICIENT_ALLOWANCE:(0,U.t)("transactionErrors.tokenInsufficientAllowance"),TOKEN_INSUFFICIENT_BALANCE:(0,U.t)("transactionErrors.tokenInsufficientBalance"),TOKEN_INSUFFICIENT_CASH:(0,U.t)("transactionErrors.tokenInsufficentCash"),TOKEN_TRANSFER_IN_FAILED:(0,U.t)("transactionErrors.tokenTransferInFailed"),TOKEN_TRANSFER_OUT_FAILED:(0,U.t)("transactionErrors.tokenTransferOutFailed"),TOKEN_PRICE_ERROR:(0,U.t)("transactionErrors.tokenPriceError"),ACCRUE_INTEREST_ACCUMULATED_INTEREST_CALCULATION_FAILED:(0,U.t)("transactionErrors.accrueInterestAccumulatedInterestCalculationFailed"),ACCRUE_INTEREST_BORROW_RATE_CALCULATION_FAILED:(0,U.t)("transactionErrors.accrueInterestBorrowRateCalculationFailed"),ACCRUE_INTEREST_NEW_BORROW_INDEX_CALCULATION_FAILED:(0,U.t)("transactionErrors.accrueInterestNewBorrowIndexCalculationFailed"),ACCRUE_INTEREST_NEW_TOTAL_BORROWS_CALCULATION_FAILED:(0,U.t)("transactionErrors.accrueInterestNewTotalBorrowsCalculationFailed"),ACCRUE_INTEREST_NEW_TOTAL_RESERVES_CALCULATION_FAILED:(0,U.t)("transactionErrors.accrueInterestNewTotalReservesCalculationFailed"),ACCRUE_INTEREST_SIMPLE_INTEREST_FACTOR_CALCULATION_FAILED:(0,U.t)("transactionErrors.accrueInterestSimpleInterestFactorCalculationFailed"),BORROW_ACCUMULATED_BALANCE_CALCULATION_FAILED:(0,U.t)("transactionErrors.borrowAccumulatedBalanceCalculationFailed"),BORROW_ACCRUE_INTEREST_FAILED:(0,U.t)("transactionErrors.borrowAccrueInterestFailed"),BORROW_CASH_NOT_AVAILABLE:(0,U.t)("transactionErrors.borrowCashNotAvailable"),BORROW_FRESHNESS_CHECK:(0,U.t)("transactionErrors.borrowFreshnessCheck"),BORROW_NEW_TOTAL_BALANCE_CALCULATION_FAILED:(0,U.t)("transactionErrors.borrowNewTotalBalanceCalculationFailed"),BORROW_NEW_ACCOUNT_BORROW_BALANCE_CALCULATION_FAILED:(0,U.t)("transactionErrors.borrowNewAccountBorrowBalanceCalculationFailed"),BORROW_MARKET_NOT_LISTED:(0,U.t)("transactionErrors.borrowMarketNotListed"),BORROW_COMPTROLLER_REJECTION:(0,U.t)("transactionErrors.borrowComptrollerRejection"),LIQUIDATE_ACCRUE_BORROW_INTEREST_FAILED:(0,U.t)("transactionErrors.liquidateAccrueBorrowInterestFailed"),LIQUIDATE_ACCRUE_COLLATERAL_INTEREST_FAILED:(0,U.t)("transactionErrors.liquidateAccrueCollateralInterestFailed"),LIQUIDATE_COLLATERAL_FRESHNESS_CHECK:(0,U.t)("transactionErrors.liquidateCollateralFreshnessCheck"),LIQUIDATE_COMPTROLLER_REJECTION:(0,U.t)("transactionErrors.liquidateComptrollerRejection"),LIQUIDATE_COMPTROLLER_CALCULATE_AMOUNT_SEIZE_FAILED:(0,U.t)("transactionErrors.liquidateComptrollerCalculateAmountSeizeFailed"),LIQUIDATE_CLOSE_AMOUNT_IS_UINT_MAX:(0,U.t)("transactionErrors.liquidateCloseAmountIsUintMax"),LIQUIDATE_CLOSE_AMOUNT_IS_ZERO:(0,U.t)("transactionErrors.liquidateCloseAmountIsZero"),LIQUIDATE_FRESHNESS_CHECK:(0,U.t)("transactionErrors.liquidateFreshnessCheck"),LIQUIDATE_LIQUIDATOR_IS_BORROWER:(0,U.t)("transactionErrors.liquidateSeizeIsBorrower"),LIQUIDATE_REPAY_BORROW_FRESH_FAILED:(0,U.t)("transactionErrors.liquidateSeizeBorrowFreshFailed"),LIQUIDATE_SEIZE_BALANCE_INCREMENT_FAILED:(0,U.t)("transactionErrors.liquidateSeizeBalanceIncrementFailed"),LIQUIDATE_SEIZE_BALANCE_DECREMENT_FAILED:(0,U.t)("transactionErrors.liquidateSeizeBalanceDecrementFailed"),LIQUIDATE_SEIZE_COMPTROLLER_REJECTION:(0,U.t)("transactionErrors.liquidateSeizeComptrollerRejection"),LIQUIDATE_SEIZE_LIQUIDATOR_IS_BORROWER:(0,U.t)("transactionErrors.liquidateSeizeLiquidatorIsBorrower"),LIQUIDATE_SEIZE_TOO_MUCH:(0,U.t)("transactionErrors.liquidateSeizeTooMuch"),MINT_ACCRUE_INTEREST_FAILED:(0,U.t)("transactionErrors.mintAccrueInterestFailed"),MINT_COMPTROLLER_REJECTION:(0,U.t)("transactionErrors.mintComptrollerRejection"),MINT_EXCHANGE_CALCULATION_FAILED:(0,U.t)("transactionErrors.mintExchangeRateReadFailed"),MINT_EXCHANGE_RATE_READ_FAILED:(0,U.t)("transactionErrors.mintExchangeRateReadFailed"),MINT_FRESHNESS_CHECK:(0,U.t)("transactionErrors.mintFreshnessCheck"),MINT_NEW_ACCOUNT_BALANCE_CALCULATION_FAILED:(0,U.t)("transactionErrors.mintNewAccountBalanceCalculationFailed"),MINT_NEW_TOTAL_SUPPLY_CALCULATION_FAILED:(0,U.t)("transactionErrors.mintNewTotalSupplyCalculationFailed"),MINT_TRANSFER_IN_FAILED:(0,U.t)("transactionErrors.mintTransferInFailed"),MINT_TRANSFER_IN_NOT_POSSIBLE:(0,U.t)("transactionErrors.mintTransferNotPossible"),REDEEM_ACCRUE_INTEREST_FAILED:(0,U.t)("transactionErrors.redeemAccrueInterestFailed"),REDEEM_COMPTROLLER_REJECTION:(0,U.t)("transactionErrors.redeemComptrollerRejection"),REDEEM_EXCHANGE_TOKENS_CALCULATION_FAILED:(0,U.t)("transactionErrors.redeemExchangeTokensCalculationFailed"),REDEEM_EXCHANGE_AMOUNT_CALCULATION_FAILED:(0,U.t)("transactionErrors.redeemExchangeAmountCalculatioFailed"),REDEEM_EXCHANGE_RATE_READ_FAILED:(0,U.t)("transactionErrors.redeemExchangeRateReadFailed"),REDEEM_FRESHNESS_CHECK:(0,U.t)("transactionErrors.redeemFreshnessCheck"),REDEEM_NEW_ACCOUNT_BALANCE_CALCULATION_FAILED:(0,U.t)("transactionErrors.redeemNewAccountBalanceCalculationFailed"),REDEEM_NEW_TOTAL_SUPPLY_CALCULATION_FAILED:(0,U.t)("transactionErrors.redeemNewTotalSupplyCalculationFailed"),REDEEM_TRANSFER_OUT_NOT_POSSIBLE:(0,U.t)("transactionErrors.redeemTransferOutNotPossible"),REDUCE_RESERVES_ACCRUE_INTEREST_FAILED:(0,U.t)("transactionErrors.reduceReservesAccrueInterestFailed"),REDUCE_RESERVES_ADMIN_CHECK:(0,U.t)("transactionErrors.reduceReservesAdminCheck"),REDUCE_RESERVES_CASH_NOT_AVAILABLE:(0,U.t)("transactionErrors.reduceReservesCashNotAvailable"),REDUCE_RESERVES_FRESH_CHECK:(0,U.t)("transactionErrors.reduceReservesFreshCheck"),REDUCE_RESERVES_VALIDATION:(0,U.t)("transactionErrors.reduceReservesValidation"),REPAY_BEHALF_ACCRUE_INTEREST_FAILED:(0,U.t)("transactionErrors.repayBehalfAccrueInterestFailed"),REPAY_BORROW_ACCRUE_INTEREST_FAILED:(0,U.t)("transactionErrors.repayBorrowAccrueInterestFailed"),REPAY_BORROW_ACCUMULATED_BALANCE_CALCULATION_FAILED:(0,U.t)("transactionErrors.repayBorrowAccumulatedBalanceCalculationFailed"),REPAY_BORROW_COMPTROLLER_REJECTION:(0,U.t)("transactionErrors.repayBorrowComptrollerRejection"),REPAY_BORROW_FRESHNESS_CHECK:(0,U.t)("transactionErrors.repayBorrowFreshnessCheck"),REPAY_BORROW_NEW_ACCOUNT_BORROW_BALANCE_CALCULATION_FAILED:(0,U.t)("transactionErrors.repayBorrowNewAccountBorrowBalanceCalculationFailed"),REPAY_BORROW_NEW_TOTAL_BALANCE_CALCULATION_FAILED:(0,U.t)("transactionErrors.repayBorrowTransferNotPossible"),REPAY_BORROW_TRANSFER_IN_NOT_POSSIBLE:(0,U.t)("transactionErrors.repayBorrowTransferInNotPossible"),SET_COMPTROLLER_OWNER_CHECK:(0,U.t)("transactionErrors.setComptrollerOwnerCheck"),SET_INTEREST_RATE_MODEL_ACCRUE_INTEREST_FAILED:(0,U.t)("transactionErrors.setInterestRateModelAccrueInterestFailed"),SET_INTEREST_RATE_MODEL_FRESH_CHECK:(0,U.t)("transactionErrors.setInterestRateModelFreshCheck"),SET_INTEREST_RATE_MODEL_OWNER_CHECK:(0,U.t)("transactionErrors.setInterestRateModelOwnerCheck"),SET_ORACLE_MARKET_NOT_LISTED:(0,U.t)("transactionErrors.setOracleMarketNotListed"),SET_RESERVE_FACTOR_ACCRUE_INTEREST_FAILED:(0,U.t)("transactionErrors.setReserveFactorAccrueInterestFailed"),SET_RESERVE_FACTOR_ADMIN_CHECK:(0,U.t)("transactionErrors.setReserveFactorAdminCheck"),SET_RESERVE_FACTOR_FRESH_CHECK:(0,U.t)("transactionErrors.setReserveFactorFreshCheck"),SET_RESERVE_FACTOR_BOUNDS_CHECK:(0,U.t)("transactionErrors.setReserveFactorBoundsCheck"),TRANSFER_COMPTROLLER_REJECTION:(0,U.t)("transactionErrors.transferComptrollerRejection"),TRANSFER_NOT_ALLOWED:(0,U.t)("transactionErrors.transferNotAllowed"),TRANSFER_NOT_ENOUGH:(0,U.t)("transactionErrors.transferNotEnough"),TRANSFER_TOO_MUCH:(0,U.t)("transactionErrors.transferTooMuch"),ADD_RESERVES_ACCRUE_INTEREST_FAILED:(0,U.t)("transactionErrors.addReservesAccrueInterestFailed"),ADD_RESERVES_FRESH_CHECK:(0,U.t)("transactionErrors.addReservesFreshCheck"),ADD_RESERVES_TRANSFER_IN_NOT_POSSIBLE:(0,U.t)("transactionErrors.addReservesTransferInNotPossible"),TOKEN_GET_UNDERLYING_PRICE_ERROR:(0,U.t)("transactionErrors.tokenGetUnderlyingPriceError"),REPAY_VAI_COMPTROLLER_REJECTION:(0,U.t)("transactionErrors.repayVaiComptrollerRejection"),REPAY_VAI_FRESHNESS_CHECK:(0,U.t)("transactionErrors.repayVaiFreshnessCheck"),VAI_MINT_EXCHANGE_CALCULATION_FAILED:(0,U.t)("transactionErrors.vaiMintExchangeCalculationFailed"),SFT_MINT_NEW_ACCOUNT_BALANCE_CALCULATION_FAILED:(0,U.t)("transactionErrors.sftMintNewAccountBalanceCalculationFailed"),REDEEM_FEE_CALCULATION_FAILED:(0,U.t)("transactionErrors.redeemFeeCalculationFailed"),VAI_MINT_REJECTION:(0,U.t)("transactionErrors.vaiMintRejection"),VAI_BURN_REJECTION:(0,U.t)("transactionErrors.vaiBurnRejection"),VAI_LIQUIDATE_ACCRUE_BORROW_INTEREST_FAILED:(0,U.t)("transactionErrors.vaiLiquidateAccrueBorrowInterestFailed"),VAI_LIQUIDATE_ACCRUE_COLLATERAL_INTEREST_FAILED:(0,U.t)("transactionErrors.vaiLiquidateAccrueCollateralInterestFailed"),VAI_LIQUIDATE_COLLATERAL_FRESHNESS_CHECK:(0,U.t)("transactionErrors.vaiLiquidateCollateralFreshnessCheck"),VAI_LIQUIDATE_COMPTROLLER_REJECTION:(0,U.t)("transactionErrors.vaiLiquidateComptrollerRejection"),VAI_LIQUIDATE_COMPTROLLER_CALCULATE_AMOUNT_SEIZE_FAILED:(0,U.t)("transactionErrors.vaiLiquidateComptrollerCalculateAmountSeizeFailed"),VAI_LIQUIDATE_CLOSE_AMOUNT_IS_UINT_MAX:(0,U.t)("transactionErrors.vaiLiquidateCloseAmountIsUintMax"),VAI_LIQUIDATE_CLOSE_AMOUNT_IS_ZERO:(0,U.t)("transactionErrors.vaiLiquidateCloseAmountIsZero"),VAI_LIQUIDATE_FRESHNESS_CHECK:(0,U.t)("transactionErrors.vaiLiquidateFreshnessCheck"),VAI_LIQUIDATE_LIQUIDATOR_IS_BORROWER:(0,U.t)("transactionErrors.vaiLiquidateLiquidatorIsBorrower"),VAI_LIQUIDATE_REPAY_BORROW_FRESH_FAILED:(0,U.t)("transactionErrors.vaiLiquidateRepayBorrowFreshFailed"),VAI_LIQUIDATE_SEIZE_BALANCE_INCREMENT_FAILED:(0,U.t)("transactionErrors.vaiLiquidateSeizeBalanceIncrementFailed"),VAI_LIQUIDATE_SEIZE_BALANCE_DECREMENT_FAILED:(0,U.t)("transactionErrors.vaiLiquidateSeizeBalanceDecrementFailed"),VAI_LIQUIDATE_SEIZE_COMPTROLLER_REJECTION:(0,U.t)("transactionErrors.vaiLiquidateSeizeComptrollerRejection"),VAI_LIQUIDATE_SEIZE_LIQUIDATOR_IS_BORROWER:(0,U.t)("transactionErrors.vaiLiquidateSeizeLiquidatorIsBorrower"),VAI_LIQUIDATE_SEIZE_TOO_MUCH:(0,U.t)("transactionErrors.vaiLiquidateSeizeTooMuch"),MINT_FEE_CALCULATION_FAILED:(0,U.t)("transactionErrors.mintFeeCalculationFailed")},F={somethingWentWrong:(0,U.t)("errors.somethingWentWrong"),somethingWentWrongRetrievingTransactions:(0,U.t)("errors.somethingWentWrongRetrievingTransactions"),somethingWentWrongRetrievingVoterAccounts:(0,U.t)("errors.somethingWentWrongRetrievingVoterAccounts"),somethingWentWrongRetrievingVoterDetails:(0,U.t)("errors.somethingWentWrongRetrievingVoterDetails"),somethingWentWrongRetrievingVoterHistory:(0,U.t)("errors.somethingWentWrongRetrievingVoterHistory"),walletNotConnected:(0,U.t)("errors.walletNotConnected"),undefinedAccountErrorMessage:(0,U.t)("errors.undefinedAccountErrorMessage"),accountError:(0,U.t)("markets.errors.accountError"),incorrectSwapInput:(0,U.t)("swap.errors.incorrectSwapInput")},formatVErrorToReadableString=E=>{let _=F.somethingWentWrong;if("transaction"===E.type){let A=c[E.message],R=c[E.data.info];_="".concat(A," - ").concat(R)}else if("unexpected"===E.type)_=F[E.message];else if("interaction"===E.type){let A=D.y[E.code];"function"==typeof A?E.data&&(_=A(E.data)):_=A}return _||F.somethingWentWrong}},81002:function(E,_,A){A.d(_,{y:function(){return I}});var R=A(77343);let I={collateralRequired:(0,R.t)("markets.errors.collateralRequired"),collateralEnableError:E=>(0,R.t)("markets.errors.collateralEnableError",E),collateralDisableError:E=>(0,R.t)("markets.errors.collateralDisableError",E),accountError:(0,R.t)("markets.errors.accountError"),unsupportedWallet:(0,R.t)("wallets.errors.unsupportedWallet"),authorizeAccess:(0,R.t)("wallets.errors.authorizeAccess"),noProvider:(0,R.t)("wallets.errors.noProvider"),noKyc:(0,R.t)("wallets.errors.noKyc")}}}]);
//# sourceMappingURL=5072-715df91d2e26b2e8.js.map
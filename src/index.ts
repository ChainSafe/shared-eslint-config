import { MochaInstanceOptions } from "mocha";
import Plus from '@/assets/plus.svg';
import { Button } from '@/components/common/Button/Button';
import type { SwapAssetExt } from '@/root/trade/_components/TradeView/types';
import { PREVIEW_TYPES } from '@/services/contexts/preview/constants';
import { useItemPreviewContext } from '@/services/contexts/preview/ItemPreviewContext';
import type { SwapAsset } from '@/services/hooks/use-filter-swaps/types';
import styles from './trade-view-item.module.scss';

const opts: MochaInstanceOptions = {
  bail: true,
};
console.log(opts);


const foo = 1;

let b = 1

//eslint-disable-line
//eslint-disable-line no-undef
console.log(foo);

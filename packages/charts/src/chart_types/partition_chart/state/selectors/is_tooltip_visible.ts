/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { TooltipType } from '../../../../specs/constants';
import { createCustomCachedSelector } from '../../../../state/create_selector';
import { getTooltipSpecSelector } from '../../../../state/selectors/get_tooltip_spec';
import { getTooltipInfoSelector } from './tooltip';

/**
 * The brush is available only for Ordinal xScales charts and
 * if we have configured an onBrushEnd listener
 * @internal
 */
export const isTooltipVisibleSelector = createCustomCachedSelector(
  [getTooltipSpecSelector, getTooltipInfoSelector],
  ({ type }, tooltipInfo): boolean => {
    return type !== TooltipType.None && tooltipInfo.values.length > 0;
  },
);

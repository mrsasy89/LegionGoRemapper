import { useDispatch, useSelector } from 'react-redux';
import {
  selectChargeLimitEnabled,
  selectChargeLimitPercent,
  uiSlice
} from '../redux-modules/uiSlice';

export const useChargeLimitEnabled = () => {
  const chargeLimitEnabled = useSelector(selectChargeLimitEnabled);
  const chargeLimitPercent = useSelector(selectChargeLimitPercent);
  const dispatch = useDispatch();

  const setChargeLimit = (enabled: boolean) => {
    return dispatch(uiSlice.actions.setChargeLimit(enabled));
  };

  const setChargeLimitPercent = (percent: number) => {
    return dispatch(uiSlice.actions.setChargeLimitPercent(percent));
  };

  return { chargeLimitEnabled, chargeLimitPercent, setChargeLimit, setChargeLimitPercent };
};

import {useMediaQuery} from 'react-responsive';

export const useSmallDevice = () => useMediaQuery({query: '(max-width: 992px)'});
export const useBigDevice = () => useMediaQuery({query: '(min-width: 992px)'});

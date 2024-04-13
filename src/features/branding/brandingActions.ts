import { apiInstance } from '../../api';
import { HttpClientResponse } from '../../api/types';
import { headerConfig } from '../../utils/headerConfig';

const getBranding = async (): Promise<HttpClientResponse> => {
  try {
    const config = await headerConfig();
    const response = await apiInstance('/branding', config);
    return response;
  } catch (err: any) {
    return err.message;
  }
};

const brandingActions = {
  getBranding
};

export default brandingActions;

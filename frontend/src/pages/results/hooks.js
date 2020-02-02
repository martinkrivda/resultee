import ENDPOINTS from '../../endpoints';
import { useFetchRequest } from '../../utils';

export const useFetchData = () => {
  const eventListState = useFetchRequest(
    ENDPOINTS.getResultatCompetitionList(),
  );

  return eventListState;
};

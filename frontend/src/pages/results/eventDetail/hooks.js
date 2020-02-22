import ENDPOINTS from '../../../endpoints';
import { useFetchRequest } from '../../../utils';
import { useParams } from 'react-router-dom';
export const useFetchData = () => {
  const { eventId } = useParams();
  const eventDetailState = useFetchRequest(
    ENDPOINTS.getResultatCompetitionInfo(eventId),
  );
  const eventClassesState = useFetchRequest(
    ENDPOINTS.getResultatClasses(eventId),
  );

  return { eventDetailState, eventClassesState };
};

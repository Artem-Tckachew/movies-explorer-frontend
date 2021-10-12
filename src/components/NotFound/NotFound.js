import './NotFound.css'
import { useHistory } from 'react-router';

function PageNotFound() {
  const history = useHistory();
  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <h3 className="not-found__subtitle">Страница не найдена</h3>
      <button type="button" className="not-found__button" onClick={() => history.goBack()}>Назад</button>
    </div>
  );
}
export default PageNotFound;

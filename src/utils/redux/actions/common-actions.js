import {useSelector} from 'react-redux';
import {categoryAllObject} from '../../../assets/data/NewsData';
import {getAPI, postAPI} from '../../constants/api-action-types';
import apiUrls from '../../constants/api-urls';
import {
  setCategoriesList,
  setLoading,
  setNewsList,
  setReportsList,
} from '../reducer/commonSlice';
import { showSuccessToast } from '../../constants/app-alerts';

export const getCategoriesList = () => async dispatch => {
  try {
    await getAPI(`${apiUrls.categoryUrl}?list=categories`, {})
      .then(response => {
        const updatedItems = [...response?.data];
        updatedItems.unshift(categoryAllObject);
        dispatch(setCategoriesList(updatedItems));
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  } catch (error) {
    setError(error.message);
  }
};

export const getNewsList = (page, categoryId, NewsList) => async dispatch => {
  try {
    await getAPI(
      `${apiUrls.postsApi}?action=get-app-list&page=${page}&category-id=${categoryId}`,
      {},
    )
      .then(response => {
        // console.log("responseresponse-old",NewsList);
        // console.log("responseresponse-old-res",response?.data);
        // console.log("responseresponse-page",page);
        // console.log("responseresponse-categoryId",categoryId);
        // console.warn("page",page);
        if (page >= 1) {
          if (response?.data !== 'NO_MORE_RECORDS_FOUND') {
            dispatch(setNewsList(NewsList.concat(response?.data)));
          } else {
            return;
          }
        } else {
          if (response?.data !== 'NO_MORE_RECORDS_FOUND') {
            dispatch(setNewsList(response?.data));
          }
        }
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  } catch (error) {
    setError(error.message);
  }
};
export const getReportsList = () => async dispatch => {
  try {
    await getAPI(`${apiUrls.reportsUrl}?list=reports`, {})
      .then(response => {
        console.log('response-old', response);
        dispatch(setReportsList(response?.data));
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  } catch (error) {
    setError(error.message);
  }
};
export const postThisNewsReport = (payload) => async dispatch => {
  dispatch(setLoading({ visible: true, heading: "Posting report", body: "Please wait while processing" }));
  try {
    await postAPI(`${apiUrls.reportsUrl}`, payload)
      .then(response => {
        dispatch(setLoading({ visible: false, heading: "", body: "" }));
        showSuccessToast(response?.data.message);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  } catch (error) {
    setError(error.message);
  }
};

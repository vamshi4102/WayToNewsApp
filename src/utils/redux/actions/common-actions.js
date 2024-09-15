import { useSelector } from 'react-redux';
import {categoryAllObject} from '../../../assets/data/NewsData';
import {getAPI} from '../../constants/api-action-types';
import apiUrls from '../../constants/api-urls';
import {
  setCategoriesList,
  setLoading,
  setNewsList,
} from '../reducer/commonSlice';

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

export const getNewsList = (page, categoryId,NewsList) => async dispatch => {
  try {
    await getAPI(
      `${apiUrls.postsApi}?action=get-app-list&page=${page}&category-id=${categoryId}`,
      {},
    )
      .then(response => {
        console.log("responseresponse-old",NewsList);
        console.log("responseresponse-old-res",response?.data);
        console.warn("page",page);
        if (page > 1) {
          dispatch(setNewsList(NewsList.concat(response?.data)));
        } else {
          dispatch(setNewsList(response?.data));
        }
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  } catch (error) {
    setError(error.message);
  }
};

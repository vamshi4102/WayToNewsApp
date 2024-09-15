/* eslint-disable prettier/prettier */
import axios from 'axios';

export async function postAPI(url, payload) {
  try {
    const result = await axios.post(url, payload);
    return result;
  } catch (err) {
    if (err.response) {
      return err.response;
    } else {
      console.error('API call failed without response:', err);
      throw err; // Rethrow if no response is available
    }
  }
}

export async function putAPI(url, payload) {
  try {
    const result = await axios.put(url, payload);
    return result;
  } catch (err) {
    if (err.response) {
      return err.response;
    }
  }
}

export async function deleteAPI(url, params) {
  try {
    const result = await axios.delete(url, { params });
    return result;
  } catch (err) {
    if (err.response) {
      return err.response;
    }
  }
}

export async function getAPI(url, params) {
  try {
    const result = await axios.get(url, { params });
    console.log("result--getAPI",result);
    
    return result;
  } catch (err) {
    if (err.response) {
      return err.response;
    }
  }
}

export async function getAPIWithoutInstance(url, params) {
  try {
    const result = await axios.get(url, { params });
    return result;
  } catch (err) {
    if (err.response) {
      return err.response;
    }
  }
}

export async function getAPIWithToken(url, params) {
  const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjNjOTNjMWEyNGNhZjgyN2I4ZGRlOWY4MmQyMzE1MzY1MDg4YWU2MTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXZlbnR1cy1hdXRoZW50aWNhdGlvbiIsImF1ZCI6Im12ZW50dXMtYXV0aGVudGljYXRpb24iLCJhdXRoX3RpbWUiOjE3MTY1NjQyODcsInVzZXJfaWQiOiJKMUxubkx2M2dqVHpuaXhqc3JvcVFHdm9Rd0MzIiwic3ViIjoiSjFMbm5MdjNnalR6bml4anNyb3FRR3ZvUXdDMyIsImlhdCI6MTcxNjU2NDI4NywiZXhwIjoxNzE2NTY3ODg3LCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdEB0ZXN0LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.gbVqgD2O2Bp7g8rwS5YREeCgbmrrGputdtHfR1q7BeEBdBBzaeIotshKhIooy5BPacVu8Dvljb6OT28wC2odkmE9qE-Neh_I87F5vTej-J3EX_itEKp7jO5GteDWwT0WzAAFyDEcaSyXnH1x3E4zv0UrzxxKb-oCIxA_Wet4jhuviAG0rNmVLgKSN9d4cmW2PhxO2gXYRTsIIe4V0OVMQ4iX8wWJBkrssX0r8LNaa5tcNNR5-wxyNHCMr-BleJ3KcAvrMjaEE2UcObU61_zBNSW_sN-nXIQEEa_26nYsT5mZMVkir4q8_kVgqRZLB0QwC1z_dDIq3zAeeHwQOu1tnw';
  try {
    const result = await axios.get(url, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result;
  } catch (err) {
    if (err.response) {
      return err.response;
    }
  }
}

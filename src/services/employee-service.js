import config from '../config/config';
import AxiosService from './axios-service'

export default class EmployeeService {
    baseUrl = config.baseUrl;
    addEmployee(data) {
        return AxiosService.postService(`${this.baseUrl}employee`, data);
    }

    getEmployee(id) {
        return AxiosService.getService(`${this.baseUrl}employee/${id}`);
    }

    getAllEmployees() {
        return AxiosService.getService(`${this.baseUrl}employee`);
    }

    updateEmployee(data,id) {
        alert(JSON.stringify(data))
        return AxiosService.putService(`${this.baseUrl}employee/${id}`, data);
    }

    deleteEmployee(data) {
        return AxiosService.deleteService(`${this.baseUrl}employee/`+data);
    }
}

package com.yogita.ems.mapper;

import com.yogita.ems.dto.EmployeeDto;
import com.yogita.ems.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto convertEmpToDto(Employee employee){
       return new EmployeeDto(
               employee.getId(),
               employee.getFirstName(),
               employee.getLastName(),
               employee.getEmail()
               );
    }

    public static Employee convertDtoToEmp(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }


}

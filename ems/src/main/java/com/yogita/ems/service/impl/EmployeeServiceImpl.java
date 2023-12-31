package com.yogita.ems.service.impl;

import com.yogita.ems.dto.EmployeeDto;
import com.yogita.ems.entity.Employee;
import com.yogita.ems.exception.ResourceNotFoundException;
import com.yogita.ems.mapper.EmployeeMapper;
import com.yogita.ems.repository.EmployeeRepository;
import com.yogita.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

       Employee employee= EmployeeMapper.convertDtoToEmp(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.convertEmpToDto(savedEmployee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {

        List<Employee> allEmployees = employeeRepository.findAll();

        return allEmployees
                .stream().map(EmployeeMapper::convertEmpToDto)
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(()-> new ResourceNotFoundException("Employee not found"));
        return EmployeeMapper.convertEmpToDto(employee);
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updateEmployeeDto) {

        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(()-> new ResourceNotFoundException("Employee not found"));

        employee.setFirstName(updateEmployeeDto.getFirstName());
        employee.setLastName(updateEmployeeDto.getLastName());
        employee.setEmail(updateEmployeeDto.getEmail());

        Employee updatedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.convertEmpToDto(updatedEmployee);
    }

    @Override
    public void deleteEmployee(Long employeeID){
        employeeRepository.findById(employeeID)
                .orElseThrow(()-> new ResourceNotFoundException("Employee not found"));

        employeeRepository.deleteById(employeeID);
    }

}

package net.javaguides.ems.service;

import net.javaguides.ems.dto.DepartmentDto;

import java.util.List;

public interface DepartmentService {

    DepartmentDto createDepartment(DepartmentDto departmentDto);

    DepartmentDto getDepartmentById(Long id);

    List<DepartmentDto> getAllDepartment();

    DepartmentDto updateDepartment(Long id,DepartmentDto departmentDto);

    void deleteDepartment(Long id);
}

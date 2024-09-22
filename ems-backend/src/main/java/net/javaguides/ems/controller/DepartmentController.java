package net.javaguides.ems.controller;

import lombok.AllArgsConstructor;
import net.javaguides.ems.dto.DepartmentDto;
import net.javaguides.ems.service.DepartmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/departments")
@CrossOrigin("*")
public class DepartmentController {

    private DepartmentService departmentService;

    @PostMapping
    public ResponseEntity<DepartmentDto> createDepartment (@RequestBody DepartmentDto departmentDto){
        DepartmentDto d = departmentService.createDepartment(departmentDto);
        return new ResponseEntity<>(d,HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<DepartmentDto> getDepartmentById(@PathVariable("id") Long id){
        DepartmentDto d = departmentService.getDepartmentById(id);
        return ResponseEntity.ok(d);
    }

    @GetMapping
    public ResponseEntity<List<DepartmentDto>> getAllDepartment(){
        List<DepartmentDto> dList = departmentService.getAllDepartment();
        return ResponseEntity.ok(dList);
    }

    @PutMapping("{id}")
    public ResponseEntity<DepartmentDto> updateDepartmentById(@PathVariable Long id,
                                                              @RequestBody DepartmentDto departmentDto){
        DepartmentDto uD = departmentService.updateDepartment(id,departmentDto);
        return ResponseEntity.ok(uD);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteDepartment(@PathVariable Long id){
        departmentService.deleteDepartment(id);
        return ResponseEntity.ok("department deleted successfully");
    }

}

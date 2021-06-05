package com.laerte.dtvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.laerte.dtvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}

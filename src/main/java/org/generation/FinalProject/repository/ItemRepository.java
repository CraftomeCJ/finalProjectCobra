package org.generation.FinalProject.repository;

import org.springframework.data.repository.CrudRepository;
import org.generation.FinalProject.repository.entity.Item;

public interface ItemRepository extends  CrudRepository<Item, Integer> {
}

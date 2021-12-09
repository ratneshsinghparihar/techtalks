package com.bezkoder.spring.datajpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.bezkoder.spring.datajpa.model.Tutorial;

import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import javax.persistence.LockModeType;

public interface TutorialRepository extends JpaRepository<Tutorial, Long> {

	@Lock(LockModeType.PESSIMISTIC_WRITE)
  	@Query("select a from Tutorial a where a.id = :id")
  	Tutorial findATutorialForWrite(@Param("id") Long id);

	@Lock(LockModeType.PESSIMISTIC_READ)
  	@Query("select a from Tutorial a where a.id = :id")
  	Tutorial findATutorialForRead(@Param("id") Long id);

	List<Tutorial> findByPublished(boolean published);
	List<Tutorial> findByTitleContaining(String title);

}

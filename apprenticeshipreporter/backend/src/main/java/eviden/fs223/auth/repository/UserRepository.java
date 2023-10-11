package eviden.fs223.auth.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import eviden.fs223.auth.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  Optional<User> findById(long id);

  Boolean existsByEmail(String email);
}

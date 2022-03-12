package com.spring.javascript.dao;

import com.spring.javascript.model.Role;
import com.spring.javascript.model.User;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Repository
public class UserDaoImpl implements UserDao {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<User> getAllUsers() {
        return entityManager.createQuery("FROM User",User.class).getResultList();
    }
    @Transactional
    @Override
    public User getUserById(Long id) {
        return entityManager.find(User.class,id);
    }
    @Transactional
    @Override
    public void saveUser(User user) {
      entityManager.persist(user);
    }
    @Transactional
    @Override
    public void removeUser(Long id) {
        entityManager.remove(getUserById(id));
    }
    @Transactional
    @Override
    public void updateUser(Long id, User user) {
        User userUpdateDb = getUserById(id);
        userUpdateDb.setUserName(user.getUserName());
        userUpdateDb.setFirstName(user.getFirstName());
        userUpdateDb.setLastName(user.getLastName());
        userUpdateDb.setAge(user.getAge());
        userUpdateDb.setEmail(user.getEmail());
        userUpdateDb.setRoles(user.getRoles());
        entityManager.merge(userUpdateDb);

    }

    @Transactional
    @Override
    public User getUserByUserEmail(String email) {
        return entityManager.createQuery("SELECT u FROM User u WHERE u.email=:email",User.class)
                .setParameter("email",email)
                .getSingleResult();
    }
    @Transactional
    @Override
    public User getUserByUserName(String userName) {
        return entityManager.createQuery("SELECT u from User u WHERE u.userName=:userName",User.class)
                .setParameter("userName",userName)
                .getSingleResult();
    }

    @Override
    public Set<Role> getAllRoles() {
         List<Role> roleList = entityManager.createQuery("FROM Role",Role.class).getResultList();
         return new HashSet<>(roleList);
    }
    @Transactional
    @Override
    public Set<Role> getRolesByRoleNames(String[] roleNames) {
        Set<Role> roles = new HashSet<>();
        for (String role:roleNames) {
            roles.add(getRoleByName(role));
        }
        return roles;
    }
    @Transactional
    @Override
    public Role getRoleByName(String roleName) {
        return entityManager.createQuery("SELECT u FROM Role u WHERE u.role=:role",Role.class)
                .setParameter("role",roleName)
                .getSingleResult();
    }
    @Transactional
    @Override
    public Role getRoleById(Long id) {
        return entityManager.find(Role.class,id);
    }
}

package com.usergroup.userwebapi.services;

import com.usergroup.userwebapi.models.Group;
import com.usergroup.userwebapi.repositories.GroupRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class GroupService {

    private final GroupRepository groupRepository;

    // Get all groups
    public List<Group> getAllGroups() {
        return groupRepository.findAll();
    }

    // Get group by id
    public Group getGroupById(Long id) {
        Optional<Group> group = groupRepository.findById(id);
        return group.orElse(null);
    }

    // Create group
    public Group createGroup(Group group) {
        return groupRepository.save(group);
    }

    // Update group
    public Group updateGroup(Long id, Group updatedGroup) {
        Optional<Group> existingGroupOpt = groupRepository.findById(id);
        if (existingGroupOpt.isEmpty()) {
            return null; // return null if not found
        }

        Group existingGroup = existingGroupOpt.get();

        // Update editable fields
        existingGroup.setLabel(updatedGroup.getLabel());
        existingGroup.setDescription(updatedGroup.getDescription());
        existingGroup.setGerant(updatedGroup.getGerant());
        existingGroup.setUsers(updatedGroup.getUsers());

        // Save and return updated group
        return groupRepository.save(existingGroup);
    }


    // Delete group
    public boolean deleteGroup(Long id) {
        if (!groupRepository.existsById(id)) {
            return false;
        }
        groupRepository.deleteById(id);
        return true;
    }
}

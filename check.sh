# Verify installation
docker_version=$(docker --version 2>/dev/null)
docker_compose_version=$(docker-compose --version 2>/dev/null)

if [[ -n $docker_version && -n $docker_compose_version ]]; then
    echo -e "\n✅ Docker and Docker Compose are successfully installed!"
    echo "Docker version: $docker_version"
    echo "Docker Compose version: $docker_compose_version"
else
    echo -e "\n❌ Docker or Docker Compose installation failed. Please check for errors."
fi

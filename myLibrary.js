function collided()
{
    bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x

    if(bulletRightedge>=wallLeftEdge)
    {
        return true;
    }
    return false;
}
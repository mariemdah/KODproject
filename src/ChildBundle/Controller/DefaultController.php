<?php

namespace ChildBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('ChildBundle:Default:index.html.twig');
    }
}
